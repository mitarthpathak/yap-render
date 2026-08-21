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
