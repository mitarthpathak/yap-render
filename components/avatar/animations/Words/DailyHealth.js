/**
 * Indian Sign Language (ISL) Animations: Daily Life, Health & Medical
 * - WATER, SLEEP, TOILET, DOCTOR, HOSPITAL, PAIN
 */

const finish = (ref) => {
    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

/**
 * WATER - A relaxed W-hand travels to the chin, makes two small natural
 * contacts, then returns through the same path. The previous version jumped
 * directly between large elbow rotations, which made the sign look robotic.
 */
export const WATER = (ref) => {
    let a = [];
    // Prepare the W-hand: first three fingers remain open while the little
    // finger and thumb fold in. The wrist is turned toward the face.
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI / 3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI / 4, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI / 5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 3.4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI / 5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 3.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI / 2.45, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 10, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 10, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI / 6, "+"]);
    ref.animations.push(a);

    // Ease in to the chin rather than snapping into it.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 2.9, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI / 2.08, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 5, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 9, "+"]);
    ref.animations.push(a);

    // A short release and second gentle contact read as a deliberate sign.
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI / 2.22, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 12, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI / 2.08, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 5, "-"]);
    ref.animations.push(a);

    // Return to the avatar's shared neutral pose.
    a = [];
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * SLEEP - ISL "sleep": the right flat hand (B, fingers together) is laid
 * against the right cheek, palm toward the face and fingers pointing up
 * along the side of the head, and the head tilts to the right to rest on the
 * palm (head-tilt is the obligatory non-manual of ISL SLEEP), settling in two
 * small steps as if dozing off, then everything returns to rest.
 *   stage 1  wrist ~[-12,67,13] cm beside the jaw, palm toward the cheek
 *            (avatar-left/back), fingers up past the ear
 *   stage 2-3 head tilts right (Neck.z) and slightly forward onto the palm,
 *            light cheek-on-palm contact
 */
export const SLEEP = (ref) => {
    let a = [];
    // Stage 1: flat hand rises to the right cheek, palm toward the face.
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", Math.PI / 6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.35, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI / 8, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -Math.PI / 3.2, "-"]);
    ref.animations.push(a);

    // Stage 2: the head starts to lean right onto the palm.
    a = [];
    a.push(["mixamorigNeck", "rotation", "z", Math.PI / 20, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 10, "+"]);
    ref.animations.push(a);

    // Stage 3: the head settles fully onto the hand (asleep).
    a = [];
    a.push(["mixamorigNeck", "rotation", "z", Math.PI / 13, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 9, "+"]);
    ref.animations.push(a);

    // Return to the neutral pose.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "z", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * TOILET - ISL "toilet": right fist with only the little finger raised
 * (I-hand: index, middle and ring curled, thumb folded over them), held up
 * in front of the right shoulder/chest with the palm toward the viewer and
 * the little finger pointing up; the hand gives two small side-to-side
 * wrist twists (shake), then returns to rest.
 *   stage 1  wrist ~[-19,57,21] cm, little finger up, palm forward
 *   stage 2-4 forearm/wrist twist +-0.3 rad about the vertical finger axis
 */
export const TOILET = (ref) => {
    let a = [];
    // Stage 1: little-finger hand up in front of the right shoulder.
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI / 3, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI / 3, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI / 3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI / 3, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI / 3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 8, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", Math.PI / 12, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI / 4, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -Math.PI / 6, "-"]);
    ref.animations.push(a);

    // Stages 2-4: two small shakes (wrist twists) of the little finger.
    a = [];
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI / 4 + 0.3, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI / 4 - 0.3, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI / 4 + 0.3, "+"]);
    ref.animations.push(a);

    // Return to the neutral pose.
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * DOCTOR - ISL "doctor" (feeling the pulse): the left hand is held in front
 * of the stomach, forearm forward, palm up, wrist exposed; the right hand,
 * index and middle fingers extended together (ring and little finger curled,
 * thumb folded), palm down with the fingers pointing left, lays its
 * fingertips on the left inner wrist (pulse point) and taps it twice, then
 * both hands return to rest.
 *   stage 1  left wrist ~[15,42,32] cm palm up; right H-hand raised beside it
 *   stage 2  right fingertips hover ~5 cm above the left inner wrist
 *   stage 3-5 right fingertips ~[19,46,33] touch the inner wrist, lift, touch
 */
export const DOCTOR = (ref) => {
    let a = [];
    // Stage 1: left palm-up hand forward; right hand forms the H-hand and
    // rises to the right of it.
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI / 10, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -Math.PI / 5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI / 2.2, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -Math.PI / 1.5, "-"]);

    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI / 3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI / 3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI / 3, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI / 3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", Math.PI / 8, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 2.2, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI / 4, "+"]);
    ref.animations.push(a);

    // Stage 2: once the left palm is up, the right hand swings in over the
    // left wrist, fingertips hovering just above the pulse point.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "y", Math.PI / 3, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI / 6, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.1, "+"]);
    ref.animations.push(a);

    // Stages 3-5: fingertips press the pulse point, lift, press again.
    a = [];
    a.push(["mixamorigRightHand", "rotation", "z", Math.PI / 10, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHand", "rotation", "z", 0.1, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHand", "rotation", "z", Math.PI / 10, "+"]);
    ref.animations.push(a);

    // Return to the neutral pose.
    a = [];
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI / 1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);

    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * HOSPITAL - Right index finger draws a red cross on upper left shoulder
 */
export const HOSPITAL = (ref) => {
    let a = [];
    // Stage 1: Right index to left upper arm/shoulder
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/4, "+"]); // Reach to left shoulder
    ref.animations.push(a);

    // Stroke 1: Vertical down
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "-"]);
    ref.animations.push(a);

    // Stroke 2: Horizontal across
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.8, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/5, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * PAIN - Both index fingers pointing towards each other pulsing repeatedly with pained head expression
 */
export const PAIN = (ref) => {
    let a = [];
    // Stage 1: Both index fingers pointing inward towards each other at chest
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/8, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);

    a.push(["mixamorigNeck", "rotation", "x", Math.PI/7, "+"]);
    ref.animations.push(a);

    // Thrust 1
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/4, "-"]);
    ref.animations.push(a);

    // Return 1
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "+"]);
    ref.animations.push(a);

    // Thrust 2
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/4, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};
