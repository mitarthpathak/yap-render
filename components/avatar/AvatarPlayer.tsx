'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as words from './animations/words'
import * as alphabets from './animations/alphabets'
import { defaultPose } from './animations/defaultPose'
import { textToGloss } from './textToGloss'
import { createFaceLayer } from './humanLayer'
import { looksPreTranslated } from '@/lib/islVocabulary'

type SignInstruction = [string, 'rotation', 'x' | 'y' | 'z', number, '+' | '-']
type SignRuntime = {
  animations: SignInstruction[][]
  characters: string[]
  pending: boolean
  model?: 'default' | 'human'
  avatar?: THREE.Object3D
}

type BoneUserData = {
  restQuaternion?: THREE.Quaternion
  gestureRestQuaternion?: THREE.Quaternion
  restPosition?: THREE.Vector3
  restScale?: THREE.Vector3
  delta?: { x: number; y: number; z: number }
}

type AvatarPlayerProps = {
  phrase: string
  requestId: number
  model?: 'default' | 'human'
  appendToQueue?: boolean
  stopId?: number
  resetId?: number
  speed?: number
  onStateChange: (state: 'loading' | 'ready' | 'signing') => void
}

const wordAnimations = words as unknown as Record<string, (runtime: SignRuntime) => void>
const alphabetAnimations = alphabets as unknown as Record<string, (runtime: SignRuntime) => void>

export function AvatarPlayer({ phrase, requestId, model = 'default', appendToQueue = false, stopId = 0, resetId = 0, speed = 1, onStateChange }: AvatarPlayerProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const runtimeRef = useRef<SignRuntime>({ animations: [], characters: [], pending: true })
  const readyRef = useRef(false)
  const pendingPhraseRef = useRef<{ phrase: string; requestId: number } | null>(null)
  const appendToQueueRef = useRef(appendToQueue)
  const speedRef = useRef(speed)

  useEffect(() => {
    appendToQueueRef.current = appendToQueue
  }, [appendToQueue])

  useEffect(() => {
    speedRef.current = speed
  }, [speed])

  useEffect(() => {
    if (!requestId) return
    const next = { phrase, requestId }
    if (!readyRef.current) {
      pendingPhraseRef.current = next
      onStateChange('loading')
      return
    }
    enqueuePhrase(next.phrase, runtimeRef.current, appendToQueue)
    onStateChange('signing')
  }, [phrase, requestId, onStateChange])

  useEffect(() => {
    if (!stopId) return
    pendingPhraseRef.current = null
    runtimeRef.current.animations = []
    onStateChange('ready')
  }, [stopId, onStateChange])

  useEffect(() => {
    if (!resetId || !readyRef.current) return
    pendingPhraseRef.current = null
    resetAvatar(runtimeRef.current, model)
    onStateChange('ready')
  }, [resetId, model, onStateChange])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const runtime = runtimeRef.current
    runtime.animations = []
    runtime.characters = []
    runtime.pending = true
    runtime.avatar = undefined
    runtime.model = model
    readyRef.current = false
    // Changing the avatar must not silently discard the phrase that is
    // already on screen. The old Human branch loaded correctly, but it did
    // not replay the current request after the new GLB finished loading.
    pendingPhraseRef.current = requestId ? { phrase, requestId } : null
    onStateChange('loading')
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#efede7')
    // Keep the avatar framed from head through the hips, including when the
    // canvas becomes wider on desktop. The old close-up was centered on the
    // chest, which cropped the lower body out of the stage.
    const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 1000)
    camera.position.set(0, 0.62, 3)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.HemisphereLight('#fff9ed', '#8f9e82', 2.4))
    const keyLight = new THREE.DirectionalLight('#ffffff', 3.6)
    keyLight.position.set(3, 5, 4)
    keyLight.castShadow = true
    scene.add(keyLight)
    const rimLight = new THREE.PointLight('#ef714f', 15, 8)
    rimLight.position.set(-2.8, 2, 2)
    scene.add(rimLight)

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect()
      if (!width || !height) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)
    resize()

    let disposed = false
    const loader = new GLTFLoader()
    // Both avatars are the same ybot rig. "Human" layers a procedural face and
    // warm-toned armour on top at runtime; the model file is untouched.
    const modelPath = '/models/ybot.glb'
    loader.load(modelPath, (gltf) => {
      if (disposed) return
      const avatar = gltf.scene
      avatar.traverse((child) => {
        child.castShadow = true
        child.frustumCulled = false
      })
      runtime.avatar = avatar
      // Preserve the requested close framing, while placing the face just
      // above the canvas centre instead of against the top edge.
      avatar.position.y = -0.85
      scene.add(avatar)
      if (model === 'human') {
        applyWarmArmorColors(avatar)
        const headBone = getAvatarBone(avatar, 'mixamorig:Head')
        if (headBone) {
          const faceLayer = createFaceLayer()
          // Compensate for ybot's 0.01 rig scale and sit the head on the neck.
          faceLayer.scale.set(13.5, 13.5, 13.5)
          faceLayer.position.set(0, 2, 1)
          headBone.add(faceLayer)
        }
      }
      // Animation tables author each gesture as a delta rotation from rest.
      // YBot's rig ships in a pure identity T-pose, so composing the delta onto
      // each bone's captured rest quaternion reproduces the authored pose.
      captureRestQuaternions(avatar)
      // Apply the existing default-pose instructions immediately so every new
      // instance starts clean. Keeping those instructions in the frame queue
      // allowed a switch or reset to display an intermediate bone position.
      resetAvatar(runtime, model)
      readyRef.current = true
      const queuedRequest = pendingPhraseRef.current
      if (queuedRequest) {
        pendingPhraseRef.current = null
        enqueuePhrase(queuedRequest.phrase, runtime, appendToQueueRef.current)
        onStateChange('signing')
      } else {
        onStateChange('ready')
      }
    }, undefined, () => onStateChange('ready'))

    let animationFrame = 0
    let nextFrameAt = 0
    let wasSigning = false
    const animate = (now: number) => {
      animationFrame = requestAnimationFrame(animate)
      const queue = runtime.animations
      if (runtime.avatar && queue.length && now >= nextFrameAt) {
        wasSigning = true
        const frame = queue[0]
        for (let index = 0; index < frame.length;) {
          const [boneName, , axis, target, direction] = frame[index]
          const bone = getAvatarBone(runtime.avatar, boneName)
          if (!bone) {
            frame.splice(index, 1)
            continue
          }
          const userData = bone.userData as BoneUserData
          const delta = userData.delta ?? (userData.delta = { x: 0, y: 0, z: 0 })
          const [resolvedTarget, resolvedDirection] = resolveInstructionForModel(boneName, axis, target, direction, model)
          const value = delta[axis]
          // The original step completed most poses in a few rendered frames.
          // Many signs share a raised-hand preparation pose, so that speed made
          // different signs look identical before their distinct hand/path
          // movements were visible. A smaller step keeps each authored pose
          // readable and makes the transition feel less robotic.
          const step = 0.028 * speedRef.current
          const inProgress = resolvedDirection === '+' ? value < resolvedTarget : value > resolvedTarget
          if (inProgress) {
            delta[axis] = resolvedDirection === '+' ? Math.min(value + step, resolvedTarget) : Math.max(value - step, resolvedTarget)
            const deltaQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(delta.x, delta.y, delta.z))
            const gestureRest = userData.gestureRestQuaternion || userData.restQuaternion
            bone.quaternion.copy(gestureRest ? gestureRest.clone().multiply(deltaQuaternion) : deltaQuaternion)
            index += 1
          } else {
            frame.splice(index, 1)
          }
        }
        if (!frame.length) {
          queue.shift()
          // Hold each authored key pose long enough for the user to perceive
          // the sign's movement before progressing to the next one.
          nextFrameAt = now + 360 / speedRef.current
        }
      }
      if (wasSigning && !queue.length) {
        wasSigning = false
        onStateChange('ready')
      }
      renderer.render(scene, camera)
    }
    animationFrame = requestAnimationFrame(animate)

    return () => {
      disposed = true
      readyRef.current = false
      cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      renderer.dispose()
      mount.replaceChildren()
    }
  }, [model, onStateChange])

  return <div ref={mountRef} className="avatar-canvas" aria-label="Animated Indian Sign Language avatar" />
}

// Applies colour only to the existing skinned robot mesh. No vertices, bones,
// weights, or animation instructions are changed, so the ISL movements remain
// exactly the same while the body adopts the requested warm armour palette.
function applyWarmArmorColors(avatar: THREE.Object3D) {
  const chestCream = new THREE.Color('#e2d3bc')
  const warmBeige = new THREE.Color('#d4bea1')
  const limbBeige = new THREE.Color('#c8b093')
  const lowerBeige = new THREE.Color('#bfa88c')
  const neckCream = new THREE.Color('#d9c7ae')
  const jointCharcoal = new THREE.Color('#4a4641')

  avatar.traverse((child) => {
    if (!(child as THREE.Mesh).isMesh) return
    const mesh = child as THREE.Mesh
    const positions = mesh.geometry?.attributes.position
    if (!positions) return

    if (mesh.name === 'Alpha_Surface') {
      const colors = new Float32Array(positions.count * 3)
      for (let index = 0; index < positions.count; index += 1) {
        const x = positions.getX(index)
        const y = positions.getY(index)
        const z = positions.getZ(index)
        const isNeck = y > 1.48 && Math.abs(x) < 0.12 && z > -0.1
        const isChest = y >= 1.18 && Math.abs(x) <= 0.38
        const isWaistOrHip = y >= 0.78 && y < 1.18 && Math.abs(x) <= 0.36
        const isArm = Math.abs(x) > 0.34 && y > 0.82
        const isCalfOrFoot = y < 0.42
        const color = isNeck
          ? neckCream
          : isChest
            ? chestCream
            : isWaistOrHip
              ? warmBeige
              : isArm
                ? limbBeige
                : isCalfOrFoot
                  ? lowerBeige
                  : warmBeige
        colors[index * 3] = color.r
        colors[index * 3 + 1] = color.g
        colors[index * 3 + 2] = color.b
      }
      mesh.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      mesh.material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.63,
        metalness: 0.04,
      })
    }

    if (mesh.name === 'Alpha_Joints') {
      const colors = new Float32Array(positions.count * 3)
      for (let index = 0; index < positions.count; index += 1) {
        colors[index * 3] = jointCharcoal.r
        colors[index * 3 + 1] = jointCharcoal.g
        colors[index * 3 + 2] = jointCharcoal.b
      }
      mesh.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      mesh.material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.72,
        metalness: 0.07,
      })
    }
  })
}

function getAvatarBone(avatar: THREE.Object3D, boneName: string) {
  // Animation tables use compact Mixamo names. YBot stores
  // `mixamorig:RightArm`; the Ready Player Me human stores `RightArm`.
  // Resolve both forms (and armature-prefixed exporter variants) so the same
  // proven animation files work for both avatars.
  const compact = boneName.replace(/^mixamorig:?/, '')
  const candidates = [boneName, `mixamorig:${compact}`, compact]
  for (const candidate of candidates) {
    const bone = avatar.getObjectByName(candidate)
    if (bone) return bone
  }
  let resolved: THREE.Object3D | undefined
  avatar.traverse((child) => {
    if (resolved || child.type !== 'Bone') return
    const normalized = child.name.split('|').pop()?.replace(/^mixamorig:?/, '')
    if (normalized === compact) resolved = child
  })
  if (resolved) return resolved
  return undefined
}

function captureRestQuaternions(avatar: THREE.Object3D) {
  avatar.traverse((child) => {
    if (child.type !== 'Bone') return
    const userData = child.userData as BoneUserData
    userData.restQuaternion = child.quaternion.clone()
    userData.gestureRestQuaternion = userData.restQuaternion.clone()
    userData.restPosition = child.position.clone()
    userData.restScale = child.scale.clone()
  })
}

function resetAvatar(runtime: SignRuntime, model: 'default' | 'human') {
  const avatar = runtime.avatar
  if (!avatar) return

  runtime.animations = []
  runtime.characters = []
  avatar.traverse((child) => {
    if (child.type !== 'Bone') return
    const userData = child.userData as BoneUserData
    if (userData.gestureRestQuaternion) child.quaternion.copy(userData.gestureRestQuaternion)
    if (userData.restPosition) child.position.copy(userData.restPosition)
    if (userData.restScale) child.scale.copy(userData.restScale)
    userData.delta = { x: 0, y: 0, z: 0 }
  })

  // Every word table is authored from defaultPose(). Apply that same proven
  // starting pose to both rigs, then snap it before playback begins. The
  // human rig has the same bones without the `mixamorig:` prefix, which
  // getAvatarBone() resolves above.
  defaultPose(runtime)
  for (const frame of runtime.animations) {
    for (const [boneName, , axis, target, direction] of frame) {
      const bone = getAvatarBone(avatar, boneName)
      if (!bone) continue
      const userData = bone.userData as BoneUserData
      const delta = userData.delta ?? (userData.delta = { x: 0, y: 0, z: 0 })
      const [resolvedTarget] = resolveInstructionForModel(boneName, axis, target, direction, model)
      delta[axis] = resolvedTarget
      const deltaQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(delta.x, delta.y, delta.z))
      const gestureRest = userData.gestureRestQuaternion || userData.restQuaternion
      bone.quaternion.copy(gestureRest ? gestureRest.clone().multiply(deltaQuaternion) : deltaQuaternion)
    }
  }
  runtime.animations = []
  runtime.characters = []
}

function resolveInstructionForModel(
  _boneName: string,
  _axis: 'x' | 'y' | 'z',
  target: number,
  direction: '+' | '-',
  _model: 'default' | 'human',
): [number, '+' | '-'] {
  // Both avatars now run on the same ybot rig, so the authored YBot-coordinate
  // tables apply verbatim. The brunette rig's mirrored upper-arm/forearm axes
  // no longer exist; this hook stays as the single place to translate an
  // authored instruction if another rig is ever added.
  return [target, direction]
}

function enqueuePhrase(input: string, runtime: SignRuntime, append = false) {
  if (!append) runtime.animations = []

  // The page now resolves every phrase to canonical ISL gloss (Gemini online,
  // rule-based offline) before it reaches here. When the input is already made
  // of playable tokens, skip re-translation and play it verbatim — this keeps
  // the 3D player dumb and fast. Raw English still falls through to textToGloss
  // so direct callers and legacy paths keep working.
  const tokens = looksPreTranslated(input)
    ? input.trim().toUpperCase().split(/\s+/).filter(Boolean)
    : (textToGloss(input) as { tokens: string[] }).tokens

  const queueNames = tokens.map(token => {
    const word = token.toUpperCase()
    if (word in wordAnimations) {
      // Find the action ID in SUPPORTED_SIGNS if possible, fallback to clip_name
      return `clip_${word.toLowerCase().replace(' ', '')}`
    }
    return token
  })

  console.log(`Input:\n${input}`)
  console.log(`Detected:\n${tokens.join(' ΓåÆ ')}`)
  console.log(`Animation queue:\n${queueNames.join(' ΓåÆ ')}`)

  for (const token of tokens) {
    const word = token.toUpperCase()
    const wordAnimation = wordAnimations[word]
    if (wordAnimation) {
      wordAnimation(runtime)
      continue
    }
    for (const letter of word) alphabetAnimations[letter]?.(runtime)
  }
}
