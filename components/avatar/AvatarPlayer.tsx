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
  restWorldQuaternion?: THREE.Quaternion
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

    // The human GLB (a Mixamo-rigged Ready Player Me avatar) shares YBot's
    // exact bone hierarchy and names, but its own rest pose is a real posed
    // skeleton (arms relaxed at the sides, elbows bent) with non-identity
    // local rotations, unlike YBot's identity T-pose. The word/letter tables
    // were tuned by eye against YBot's identity rig, so writing that same
    // Euler delta straight onto the human rig's own (differently rotated)
    // local axes bends every joint in the wrong real-world direction — worst
    // at the wrist, since it sits at the end of the whole misaligned arm
    // chain and also never received YBot's baseline "arms raised to signing
    // height" pose (that step was skipped for human to avoid the arms
    // popping out sideways).
    //
    // Fix: always drive an invisible YBot skeleton with the proven deltas,
    // unchanged. Every frame, for each bone, read how far it has rotated
    // from ITS OWN rest *in world space*, then re-apply that same
    // world-space offset on top of the display avatar's own rest. A
    // world-space offset carries no assumption about a bone's local axis
    // convention, so the same gesture reproduces correctly no matter how
    // the display rig's rest pose is oriented.
    let driverAvatar: THREE.Object3D | undefined
    let displayAvatar: THREE.Object3D | undefined
    let boneMap: Map<THREE.Object3D, THREE.Object3D> | null = null
    let staticParentWorldQuat: Map<THREE.Object3D, THREE.Quaternion> | null = null

    const setupDisplayAvatar = (avatar: THREE.Object3D) => {
      avatar.traverse((child) => {
        child.castShadow = true
        child.frustumCulled = false
      })
      // Preserve the requested close framing, while placing the face just
      // above the canvas centre instead of against the top edge.
      avatar.position.y = -0.85
      scene.add(avatar)
    }

    ;(async () => {
      try {
        if (model === 'human') {
          const [humanGltf, ybotGltf] = await Promise.all([
            loader.loadAsync('/models/brunette.glb'),
            loader.loadAsync('/models/ybot.glb'),
          ])
          if (disposed) return
          displayAvatar = humanGltf.scene
          driverAvatar = ybotGltf.scene
          setupDisplayAvatar(displayAvatar)
          captureRestQuaternions(driverAvatar)
          captureRestWorldQuaternions(driverAvatar)
          captureRestWorldQuaternions(displayAvatar)
          boneMap = buildBoneCorrespondence(driverAvatar, displayAvatar)
          staticParentWorldQuat = buildStaticParentMap(displayAvatar)
        } else {
          const gltf = await loader.loadAsync('/models/ybot.glb')
          if (disposed) return
          displayAvatar = gltf.scene
          driverAvatar = gltf.scene
          setupDisplayAvatar(displayAvatar)
          captureRestQuaternions(driverAvatar)
        }
        runtime.avatar = driverAvatar
        // Both rigs are now driven by the same identity-rest YBot skeleton,
        // so both need the same baseline pose before any word/letter deltas
        // layer on top of it.
        defaultPose(runtime)
        readyRef.current = true
        const queuedRequest = pendingPhraseRef.current
        if (queuedRequest) {
          pendingPhraseRef.current = null
          enqueuePhrase(queuedRequest.phrase, runtime, appendToQueueRef.current)
          onStateChange('signing')
        } else {
          onStateChange('ready')
        }
      } catch {
        onStateChange('ready')
      }
    })()

    let animationFrame = 0
    let nextFrameAt = 0
    let wasSigning = false
    const animate = (now: number) => {
      animationFrame = requestAnimationFrame(animate)
      const queue = runtime.animations
      if (driverAvatar && queue.length && now >= nextFrameAt) {
        wasSigning = true
        const frame = queue[0]
        for (let index = 0; index < frame.length;) {
          const [boneName, , axis, target, direction] = frame[index]
          const bone = getAvatarBone(driverAvatar, boneName)
          if (!bone) {
            frame.splice(index, 1)
            continue
          }
          const userData = bone.userData as BoneUserData
          const delta = userData.delta ?? (userData.delta = { x: 0, y: 0, z: 0 })
          const value = delta[axis]
          const step = 0.075
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
          nextFrameAt = now + 230
        }
      }
      if (driverAvatar && displayAvatar && driverAvatar !== displayAvatar && boneMap && staticParentWorldQuat) {
        applyRetarget(driverAvatar, boneMap, staticParentWorldQuat)
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

function captureRestWorldQuaternions(avatar: THREE.Object3D) {
  avatar.updateMatrixWorld(true)
  avatar.traverse((child) => {
    if (child.type !== 'Bone') return
    ;(child.userData as BoneUserData).restWorldQuaternion = child.getWorldQuaternion(new THREE.Quaternion())
  })
}

// Maps every driver (YBot) bone to the same-named bone on the display
// avatar. Both rigs share identical Mixamo bone names and parent structure,
// so this is a 1:1 correspondence wherever the display rig has a matching
// bone (extras like eye bones simply have no counterpart and stay at rest).
function buildBoneCorrespondence(driverAvatar: THREE.Object3D, displayAvatar: THREE.Object3D) {
  const map = new Map<THREE.Object3D, THREE.Object3D>()
  driverAvatar.traverse((driverBone) => {
    if (driverBone.type !== 'Bone') return
    const displayBone = getAvatarBone(displayAvatar, driverBone.name)
    if (displayBone) map.set(driverBone, displayBone)
  })
  return map
}

// For each display bone whose parent is not itself an animated bone (i.e.
// the top of the skeleton, parented to the armature/mesh root), cache that
// parent's world rotation once. It never changes, so it doesn't need to be
// recomputed every frame the way the animated chain does.
function buildStaticParentMap(displayAvatar: THREE.Object3D) {
  const map = new Map<THREE.Object3D, THREE.Quaternion>()
  displayAvatar.traverse((child) => {
    if (child.type !== 'Bone') return
    if (!child.parent || child.parent.type !== 'Bone') {
      map.set(child, child.parent ? child.parent.getWorldQuaternion(new THREE.Quaternion()) : new THREE.Quaternion())
    }
  })
  return map
}

function applyRetarget(
  driverAvatar: THREE.Object3D,
  boneMap: Map<THREE.Object3D, THREE.Object3D>,
  staticParentWorldQuat: Map<THREE.Object3D, THREE.Quaternion>
) {
  driverAvatar.updateMatrixWorld(true)
  // Bones are visited parent-before-child, so by the time a child is
  // processed its display-side parent's brand-new world rotation is already
  // in this map.
  const newWorldQuat = new Map<THREE.Object3D, THREE.Quaternion>()
  driverAvatar.traverse((driverBone) => {
    if (driverBone.type !== 'Bone') return
    const displayBone = boneMap.get(driverBone)
    if (!displayBone) return
    const driverUserData = driverBone.userData as BoneUserData
    const displayUserData = displayBone.userData as BoneUserData
    const driverRestWorld = driverUserData.restWorldQuaternion
    const displayRestWorld = displayUserData.restWorldQuaternion
    if (!driverRestWorld || !displayRestWorld) return

    const driverCurrentWorld = driverBone.getWorldQuaternion(new THREE.Quaternion())
    // How far the driver bone has moved from its own rest, in world space.
    const worldDelta = driverRestWorld.clone().invert().multiply(driverCurrentWorld)
    // Apply that same world-space offset on top of the display bone's rest.
    const targetWorld = displayRestWorld.clone().multiply(worldDelta)

    const displayParent = displayBone.parent
    const parentWorld =
      (displayParent && displayParent.type === 'Bone' ? newWorldQuat.get(displayParent) : undefined) ??
      staticParentWorldQuat.get(displayBone) ??
      new THREE.Quaternion()
    const localQuat = parentWorld.clone().invert().multiply(targetWorld)
    displayBone.quaternion.copy(localQuat)
    newWorldQuat.set(displayBone, targetWorld)
  })
}

function enqueuePhrase(input: string, runtime: SignRuntime, append = false) {
  if (!append) runtime.animations = []
  const { tokens } = textToGloss(input) as { tokens: string[] }
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
