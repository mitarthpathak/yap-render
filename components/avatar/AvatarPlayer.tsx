'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as words from './animations/words'
import * as alphabets from './animations/alphabets'
import { defaultPose } from './animations/defaultPose'
import { textToGloss } from './textToGloss'

type SignInstruction = [string, 'rotation', 'x' | 'y' | 'z', number, '+' | '-']
type SignRuntime = {
  animations: SignInstruction[][]
  characters: string[]
  pending: boolean
  avatar?: THREE.Object3D
}

type BoneUserData = {
  restQuaternion?: THREE.Quaternion
  delta?: { x: number; y: number; z: number }
}

type AvatarPlayerProps = {
  phrase: string
  requestId: number
  model?: 'default' | 'human'
  appendToQueue?: boolean
  stopId?: number
  onStateChange: (state: 'loading' | 'ready' | 'signing') => void
}

const wordAnimations = words as unknown as Record<string, (runtime: SignRuntime) => void>
const alphabetAnimations = alphabets as unknown as Record<string, (runtime: SignRuntime) => void>

export function AvatarPlayer({ phrase, requestId, model = 'default', appendToQueue = false, stopId = 0, onStateChange }: AvatarPlayerProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const runtimeRef = useRef<SignRuntime>({ animations: [], characters: [], pending: true })
  const readyRef = useRef(false)
  const pendingPhraseRef = useRef<{ phrase: string; requestId: number } | null>(null)
  const appendToQueueRef = useRef(appendToQueue)

  useEffect(() => {
    appendToQueueRef.current = appendToQueue
  }, [appendToQueue])

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
    const mount = mountRef.current
    if (!mount) return

    const runtime = runtimeRef.current
    runtime.animations = []
    runtime.characters = []
    runtime.pending = true
    runtime.avatar = undefined
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
    const modelPath = model === 'human' ? '/models/brunette.glb' : '/models/ybot.glb'
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
      // Animation tables author each gesture as a delta rotation from rest.
      // YBot's rig ships in a pure identity T-pose, so writing that delta
      // straight onto rotation.xyz happens to be correct. The human rig's
      // rest pose is a real posed skeleton (arms down, fingers relaxed) with
      // compound, non-identity rest rotations, so the delta must be composed
      // onto each bone's own rest quaternion instead of added as raw Euler
      // components (Euler component addition only holds near identity).
      captureRestQuaternions(avatar)
      // YBot ships in a neutral T-pose and needs the shared pose setup. The
      // human avatar is already authored in a relaxed arms-down pose; applying
      // YBot's pose to it pushes both arms out horizontally.
      if (model !== 'human') defaultPose(runtime)
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
          const value = delta[axis]
          // The original step completed most poses in a few rendered frames.
          // Many signs share a raised-hand preparation pose, so that speed made
          // different signs look identical before their distinct hand/path
          // movements were visible. A smaller step keeps each authored pose
          // readable and makes the transition feel less robotic.
          const step = 0.028
          const inProgress = direction === '+' ? value < target : value > target
          if (inProgress) {
            delta[axis] = direction === '+' ? Math.min(value + step, target) : Math.max(value - step, target)
            const deltaQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(delta.x, delta.y, delta.z))
            bone.quaternion.copy(userData.restQuaternion ? userData.restQuaternion.clone().multiply(deltaQuaternion) : deltaQuaternion)
            index += 1
          } else {
            frame.splice(index, 1)
          }
        }
        if (!frame.length) {
          queue.shift()
          // Hold each authored key pose long enough for the user to perceive
          // the sign's movement before progressing to the next one.
          nextFrameAt = now + 360
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
    ;(child.userData as BoneUserData).restQuaternion = child.quaternion.clone()
  })
}

function enqueuePhrase(input: string, runtime: SignRuntime, append = false) {
  if (!append) runtime.animations = []
  const { tokens } = textToGloss(input) as { tokens: string[] }
  
  const queueNames = tokens.map(token => {
    const word = token.toUpperCase()
    const wordAnimation = wordAnimations[word]
    if (wordAnimation) {
      // Find the action ID in SUPPORTED_SIGNS if possible, fallback to clip_name
      return `clip_${word.toLowerCase().replace(' ', '')}`
    }
    return token
  })

  console.log(`Input:\n${input}`)
  console.log(`Detected:\n${tokens.join(' → ')}`)
  console.log(`Animation queue:\n${queueNames.join(' → ')}`)

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
