'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as words from './animations/words'
import * as alphabets from './animations/alphabets'
import { defaultPose } from './animations/defaultPose'

type SignInstruction = [string, 'rotation', 'x' | 'y' | 'z', number, '+' | '-']
type SignRuntime = {
  animations: SignInstruction[][]
  characters: string[]
  pending: boolean
  avatar?: THREE.Object3D
}

type AvatarPlayerProps = {
  phrase: string
  requestId: number
  onStateChange: (state: 'loading' | 'ready' | 'signing') => void
}

const wordAnimations = words as Record<string, (runtime: SignRuntime) => void>
const alphabetAnimations = alphabets as Record<string, (runtime: SignRuntime) => void>

export function AvatarPlayer({ phrase, requestId, onStateChange }: AvatarPlayerProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const runtimeRef = useRef<SignRuntime>({ animations: [], characters: [], pending: true })
  const readyRef = useRef(false)
  const pendingPhraseRef = useRef<{ phrase: string; requestId: number } | null>(null)

  useEffect(() => {
    if (!requestId) return
    const next = { phrase, requestId }
    if (!readyRef.current) {
      pendingPhraseRef.current = next
      onStateChange('loading')
      return
    }
    enqueuePhrase(next.phrase, runtimeRef.current)
    onStateChange('signing')
  }, [phrase, requestId, onStateChange])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const runtime = runtimeRef.current
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#e4e8df')
    const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 1000)
    camera.position.set(0, 1.35, 1.75)
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

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(1.15, 48),
      new THREE.ShadowMaterial({ color: '#72806b', opacity: 0.16 }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -0.02
    floor.receiveShadow = true
    scene.add(floor)

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
    loader.load('/models/ybot.glb', (gltf) => {
      if (disposed) return
      const avatar = gltf.scene
      avatar.traverse((child) => {
        child.castShadow = true
        child.frustumCulled = false
      })
      runtime.avatar = avatar
      scene.add(avatar)
      defaultPose(runtime)
      readyRef.current = true
      const queuedRequest = pendingPhraseRef.current
      if (queuedRequest) {
        pendingPhraseRef.current = null
        enqueuePhrase(queuedRequest.phrase, runtime)
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
          const [boneName, action, axis, target, direction] = frame[index]
          const bone = runtime.avatar.getObjectByName(boneName) as THREE.Object3D | undefined
          if (!bone) {
            frame.splice(index, 1)
            continue
          }
          const value = bone[action][axis] as number
          const step = 0.075
          const inProgress = direction === '+' ? value < target : value > target
          if (inProgress) {
            bone[action][axis] = direction === '+' ? Math.min(value + step, target) : Math.max(value - step, target)
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
  }, [onStateChange])

  return <div ref={mountRef} className="avatar-canvas" aria-label="Animated Indian Sign Language avatar" />
}

function enqueuePhrase(input: string, runtime: SignRuntime) {
  runtime.animations = []
  const phrase = input.toUpperCase().replace(/[^A-Z ]/g, ' ').trim()
  for (const word of phrase.split(/\s+/)) {
    if (!word) continue
    const wordAnimation = wordAnimations[word]
    if (wordAnimation) {
      wordAnimation(runtime)
      continue
    }
    for (const letter of word) alphabetAnimations[letter]?.(runtime)
  }
}
