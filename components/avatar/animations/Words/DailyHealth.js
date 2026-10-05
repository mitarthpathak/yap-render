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
 * WATER (ISL "paani") - mimes drinking water from a bottle / lota.
 * - Handshape: right closed fist with the thumb extended (A-hand, thumb out);
 *   the thumb is the bottle's spout.
 * - Location: mouth; the thumb tip touches the lips.
 * - Orientation: palm facing left (slightly toward the viewer), knuckles up,
 *   thumb pointing back into the mouth.
 * - Movement: the fist is raised in front of the chin with the thumb angled
 *   up toward the mouth, then tips so the thumb tip comes to the lips;
 *   repeated twice, then back to rest.
 * Distinct from DRINK (curved C-hand tipping a glass at the lips).
 */
export const WATER = (ref) => {
    // Closed fist with the thumb extended (like the spout of a bottle / lota),
    // palm facing left; raised in front of the chin with the thumb angled up
    // toward the mouth.
    let a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 1.45, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 1.5, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 1.2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 1.45, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 1.5, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 1.2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 1.45, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 1.5, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 1.2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 1.45, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 1.5, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 1.2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0.8, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.516, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.56, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.27, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.787, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.25, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.035, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.75, "-"]);
    ref.animations.push(a);

    // Tip the 'bottle': the knuckles rise and the thumb tip comes to the lips,
    // pointing into the mouth.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.777, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.723, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.481, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.284, "+"]);
    ref.animations.push(a);

    // Ease back a little ...
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.516, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.787, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.25, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.035, "-"]);
    ref.animations.push(a);

    // ... and tip the thumb to the lips a second time.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.777, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.723, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.481, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.284, "+"]);
    ref.animations.push(a);

    // Return every touched axis to the shared neutral pose.
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
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * SLEEP - Right palm placed against tilted cheek/head
 */
export const SLEEP = (ref) => {
    let a = [];
    // Stage 1: Right hand flat against right cheek, head tilted
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.1, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -Math.PI/6, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);
    a.push(["mixamorigNeck", "rotation", "z", -Math.PI/7, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/8, "+"]);
    ref.animations.push(a);

    // Stage 2: Hold resting pose
    a = [];
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/7, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "z", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * TOILET - Right fist in front of chest shaking side-to-side twice
 */
export const TOILET = (ref) => {
    let a = [];
    // Stage 1: Right fist in front of chest
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(a);

    // Shake Left
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);
    ref.animations.push(a);

    // Shake Right
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", -Math.PI/4, "-"]);
    ref.animations.push(a);

    // Shake Left again
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * DOCTOR - Left arm forward palm up, right index & middle fingers tapping left wrist pulse
 */
export const DOCTOR = (ref) => {
    let a = [];
    // Stage 1: Left arm forward wrist exposed, right fingers above wrist
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/3, "-"]); // Wrist palm up

    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    ref.animations.push(a);

    // Tap pulse 1
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.8, "-"]);
    ref.animations.push(a);

    // Lift slightly
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(a);

    // Tap pulse 2
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.8, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
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
