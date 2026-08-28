import * as THREE from 'three'

/**
 * Creates an additive, non-destructive human head layer that can be attached
 * to the robot's head bone. This fully encapsulates the robot's head and adds
 * stylized human features (hair, ears, nose, eyes, eyebrows, and mouth).
 */
export function createFaceLayer(): THREE.Group {
  const headGroup = new THREE.Group()
  headGroup.name = 'HumanHeadLayer'

  // Materials
  const skinMaterial = new THREE.MeshStandardMaterial({
    color: '#e6c39f', // Slightly softer, less saturated warm skin tone
    roughness: 0.4,
    metalness: 0.1,
  })

  const hairMaterial = new THREE.MeshStandardMaterial({
    color: '#3b2b20', // Dark brown hair
    roughness: 0.85,
    metalness: 0.05,
  })

  // 1. Head Base (fully encapsulates the robot head)
  const headGeometry = new THREE.SphereGeometry(1, 32, 32)
  const headMesh = new THREE.Mesh(headGeometry, skinMaterial)
  // Scale to an egg/head shape. Made taller (Y=1.35) to prevent the robot's underlying head from poking through the top.
  headMesh.scale.set(0.9, 1.35, 1.05)
  headMesh.castShadow = true
  headGroup.add(headMesh)


  // 2. Hair — a youthful, dark, side-swept quiff matching the reference.
  const hairGroup = new THREE.Group()
  const hairDomeGeom = new THREE.SphereGeometry(1.02, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2.08)
  const hairDome = new THREE.Mesh(hairDomeGeom, hairMaterial)
  hairDome.scale.set(0.93, 1.22, 1.06)
  hairDome.position.set(0, 0.12, -0.1)
  hairDome.castShadow = true
  hairGroup.add(hairDome)

  // Small crown fill prevents the robot head from showing through when the
  // head rotates during a sign, while blending into the raised quiff.
  const crownFill = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), hairMaterial)
  crownFill.name = 'HumanHairCrownFill'
  crownFill.scale.set(1.28, 0.62, 0.78)
  crownFill.position.set(0, 1.43, 0.22)
  crownFill.castShadow = true
  hairGroup.add(crownFill)

  // Broad curved locks build the polished, lifted sweep seen in the sample.
  const addSweptLock = (points: THREE.Vector3[], radius: number, material = hairMaterial) => {
    const curve = new THREE.CatmullRomCurve3(points)
    const strand = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 22, radius, 10, false),
      material,
    )
    strand.castShadow = true
    hairGroup.add(strand)
  }
  const hairHighlightMaterial = new THREE.MeshStandardMaterial({
    color: '#4a3d4a',
    roughness: 0.9,
    metalness: 0,
  })
  addSweptLock([
    new THREE.Vector3(-0.76, 0.72, 0.57), new THREE.Vector3(-0.6, 1.18, 0.82),
    new THREE.Vector3(-0.16, 1.47, 0.71), new THREE.Vector3(0.4, 1.3, 0.6), new THREE.Vector3(0.7, 0.98, 0.56),
  ], 0.14)
  addSweptLock([
    new THREE.Vector3(-0.57, 0.78, 0.78), new THREE.Vector3(-0.4, 1.23, 0.98),
    new THREE.Vector3(0.03, 1.5, 0.88), new THREE.Vector3(0.47, 1.28, 0.78), new THREE.Vector3(0.67, 1.0, 0.67),
  ], 0.125, hairHighlightMaterial)
  addSweptLock([
    new THREE.Vector3(-0.42, 0.84, 0.91), new THREE.Vector3(-0.15, 1.28, 1.08),
    new THREE.Vector3(0.22, 1.4, 0.96), new THREE.Vector3(0.58, 1.13, 0.78),
  ], 0.11)
  // Small centre lock closes the crown gap and blends into the front sweep.
  addSweptLock([
    new THREE.Vector3(-0.28, 1.08, 0.98), new THREE.Vector3(-0.08, 1.32, 1.12),
    new THREE.Vector3(0.2, 1.28, 1.04), new THREE.Vector3(0.34, 1.08, 0.9),
  ], 0.095)
  // Under-fringe: a small continuous dark layer behind the front locks so the
  // robot head never shows through the centre of the hairstyle.
  const fringeFill = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 16), hairMaterial)
  fringeFill.name = 'HumanHairCentreFringeFill'
  fringeFill.scale.set(1.2, 1.12, 0.3)
  fringeFill.position.set(0, 0.91, 0.91)
  fringeFill.castShadow = true
  hairGroup.add(fringeFill)
  // Short bridge lock closes the remaining join on the right side of the fringe.
  addSweptLock([
    new THREE.Vector3(0.24, 1.26, 0.94), new THREE.Vector3(0.47, 1.18, 1.0),
    new THREE.Vector3(0.61, 0.96, 0.88),
  ], 0.09)
  addSweptLock([
    new THREE.Vector3(-0.7, 0.64, 0.44), new THREE.Vector3(-0.83, 1.04, 0.34),
    new THREE.Vector3(-0.55, 1.34, 0.4), new THREE.Vector3(-0.12, 1.5, 0.36),
  ], 0.105)

  // The narrow right side and small temple curl keep the quiff clean and young.
  const sideHair = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), hairMaterial)
  sideHair.scale.set(0.64, 1.45, 1.05)
  sideHair.position.set(0.76, 0.58, 0.05)
  sideHair.castShadow = true
  hairGroup.add(sideHair)
  addSweptLock([
    new THREE.Vector3(-0.69, 0.83, 0.69), new THREE.Vector3(-0.82, 0.66, 0.88), new THREE.Vector3(-0.64, 0.51, 0.95),
  ], 0.07)

  headGroup.add(hairGroup)

  // 3. Ears
  const earGeom = new THREE.SphereGeometry(0.2, 16, 16)

  const leftEar = new THREE.Mesh(earGeom, skinMaterial)
  leftEar.scale.set(0.5, 1.2, 1)
  leftEar.position.set(-0.9, 0, 0)
  leftEar.rotation.y = Math.PI / 8
  leftEar.rotation.z = Math.PI / 16
  headGroup.add(leftEar)

  const rightEar = new THREE.Mesh(earGeom, skinMaterial)
  rightEar.scale.set(0.5, 1.2, 1)
  rightEar.position.set(0.9, 0, 0)
  rightEar.rotation.y = -Math.PI / 8
  rightEar.rotation.z = -Math.PI / 16
  headGroup.add(rightEar)

  // A warm inner-ear inset adds depth without affecting the head shape.
  const innerEarMaterial = new THREE.MeshStandardMaterial({ color: '#c98268', roughness: 0.62 })
  ;[-1, 1].forEach((side) => {
    const innerEar = new THREE.Mesh(new THREE.SphereGeometry(0.115, 12, 12), innerEarMaterial)
    innerEar.scale.set(0.45, 1.15, 0.35)
    innerEar.position.set(side * 0.93, 0, 0.13)
    headGroup.add(innerEar)
  })

  // 4. Eyes
  const scleraMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.2 })
  const irisMaterial = new THREE.MeshStandardMaterial({ color: '#4b3621', roughness: 0.3 }) // Brown eyes
  const pupilMaterial = new THREE.MeshStandardMaterial({ color: '#000000', roughness: 0.1 })

  const eyeGeom = new THREE.SphereGeometry(0.18, 16, 16)
  const irisGeom = new THREE.SphereGeometry(0.1, 16, 16)
  const pupilGeom = new THREE.SphereGeometry(0.05, 16, 16)

  // Left Eye
  const leftEye = new THREE.Mesh(eyeGeom, scleraMaterial)
  leftEye.scale.set(1, 0.7, 0.5) // almond shape
  leftEye.position.set(-0.35, 0.1, 0.95)
  leftEye.rotation.y = -Math.PI / 12

  const leftIris = new THREE.Mesh(irisGeom, irisMaterial)
  leftIris.position.set(0, 0, 0.15)
  leftIris.scale.set(1, 1.4, 1) // counter scale to make it round
  leftEye.add(leftIris)

  const leftPupil = new THREE.Mesh(pupilGeom, pupilMaterial)
  leftPupil.position.set(0, 0, 0.1)
  leftIris.add(leftPupil)
  const leftGlint = new THREE.Mesh(new THREE.SphereGeometry(0.021, 10, 10), scleraMaterial)
  leftGlint.position.set(-0.025, 0.032, 0.052)
  leftPupil.add(leftGlint)
  headGroup.add(leftEye)

  // Right Eye
  const rightEye = new THREE.Mesh(eyeGeom, scleraMaterial)
  rightEye.scale.set(1, 0.7, 0.5)
  rightEye.position.set(0.35, 0.1, 0.95)
  rightEye.rotation.y = Math.PI / 12

  const rightIris = new THREE.Mesh(irisGeom, irisMaterial)
  rightIris.position.set(0, 0, 0.15)
  rightIris.scale.set(1, 1.4, 1)
  rightEye.add(rightIris)

  const rightPupil = new THREE.Mesh(pupilGeom, pupilMaterial)
  rightPupil.position.set(0, 0, 0.1)
  rightIris.add(rightPupil)
  const rightGlint = new THREE.Mesh(new THREE.SphereGeometry(0.021, 10, 10), scleraMaterial)
  rightGlint.position.set(-0.025, 0.032, 0.052)
  rightPupil.add(rightGlint)
  headGroup.add(rightEye)

  // 5. Eyebrows. Their small arch gives the face a clear, young expression
  // without adding any animation or changing the robot's head rig.
  const eyebrowMaterial = new THREE.MeshStandardMaterial({
    color: '#2a1b14',
    roughness: 0.9,
    metalness: 0,
  })
  const eyebrowGeometry = new THREE.CapsuleGeometry(0.035, 0.31, 4, 12)
  const addEyebrow = (x: number, lean: number, name: string) => {
    const eyebrow = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial)
    eyebrow.name = name
    eyebrow.position.set(x, 0.42, 1.02)
    eyebrow.rotation.set(0, 0, lean)
    // Capsules are vertical by default; turn them into a soft brow line.
    eyebrow.rotation.z += Math.PI / 2
    headGroup.add(eyebrow)
  }
  addEyebrow(-0.35, -0.12, 'HumanFaceLeftEyebrow')
  addEyebrow(0.35, 0.12, 'HumanFaceRightEyebrow')

  // 6. Sculpted nose: a subtle bridge, rounded tip, and two small nostrils.
  const noseBridge = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), skinMaterial)
  noseBridge.position.set(0, -0.03, 0.98)
  noseBridge.scale.set(0.55, 1.55, 0.5)
  headGroup.add(noseBridge)
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 16), skinMaterial)
  nose.position.set(0, -0.18, 1.08)
  nose.scale.set(1.25, 0.86, 1.05)
  headGroup.add(nose)
  const nostrilMaterial = new THREE.MeshStandardMaterial({ color: '#9e5e4d', roughness: 0.76 })
  ;[-0.07, 0.07].forEach((x) => {
    const nostril = new THREE.Mesh(new THREE.SphereGeometry(0.027, 10, 10), nostrilMaterial)
    nostril.position.set(x, -0.215, 1.16)
    nostril.scale.set(1.15, 0.65, 0.45)
    headGroup.add(nostril)
  })

  // 7. Layered lips form a relaxed, natural closed smile.
  const mouthGroup = new THREE.Group()
  mouthGroup.position.set(0, -0.52, 1.01)
  const lipMaterial = new THREE.MeshStandardMaterial({ color: '#a9505d', roughness: 0.58 })
  const mouthLineMaterial = new THREE.MeshStandardMaterial({ color: '#5d2d35', roughness: 0.72 })
  const upperLip = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), lipMaterial)
  upperLip.scale.set(1.25, 0.3, 0.25)
  upperLip.position.y = 0.035
  mouthGroup.add(upperLip)
  const lowerLip = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), lipMaterial)
  lowerLip.scale.set(1.2, 0.24, 0.23)
  lowerLip.position.y = -0.045
  mouthGroup.add(lowerLip)
  const mouthLine = new THREE.Mesh(new THREE.CapsuleGeometry(0.013, 0.3, 4, 12), mouthLineMaterial)
  mouthLine.rotation.z = Math.PI / 2
  mouthLine.position.z = 0.055
  mouthGroup.add(mouthLine)

  headGroup.add(mouthGroup)

  return headGroup
}
