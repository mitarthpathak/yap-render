/**
 * Indian Sign Language (ISL) Animations: Actions & Verbs
 * - COME, GO, GIVE, TAKE, WANT, NEED, LIKE, KNOW, UNDERSTAND, ASK
 */

const finish = (ref) => {
    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

/**
 * COME - Right hand extended forward palm up, beckoning inward towards chest twice
 */
export const COME = (ref) => {
    let a = [];
    // Stage 1: Right arm forward, palm up
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);
    ref.animations.push(a);

    // Beckon 1
    a = [];
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    ref.animations.push(a);

    // Release 1
    a = [];
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Beckon 2
    a = [];
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * GO - Both index-finger hands, held forward near the chest, swing to point
 * forward-and-away together. (ISL GO is two-handed; the old version was a
 * one-handed outward sweep that read as a vague wave.)
 */
export const GO = (ref) => {
    let a = [];
    // Stage 1: both hands make an index point near the chest.
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/7, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/7, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(a);

    // Stage 2: both hands swing forward and down to point away from the body.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/7, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/6, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/7, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/6, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);

    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * GIVE - Both palms open starting near chest, pushing forward in giving gesture
 */
export const GIVE = (ref) => {
    let a = [];
    // Stage 1: Both palms open near chest, facing up
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/3.5, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Stage 2: Push forward to give
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * TAKE - Right open hand reaches forward, closes into a fist and pulls back to
 * the body - grabbing something and bringing it in. Solved numerically:
 *   stage 1  hand y 0.49, x -0.04, z 0.29  (open, reached forward)
 *   stage 2  hand y 0.57, x  0.05, z 0.13  (fist, pulled back to the chest)
 */
export const TAKE = (ref) => {
    let a = [];
    // Stage 1: open right hand reaches forward at chest height.
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.2, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/8, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);
    ref.animations.push(a);

    // Stage 2: the hand closes to a fist and pulls back toward the body.
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/1.9, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * WANT - Both hands held forward palms up, curved fingers, pulling inward towards body
 */
export const WANT = (ref) => {
    let a = [];
    // Stage 1: Both arms forward, curved fingers (claw hands)
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/3, "+"]);

    a.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/3, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    ref.animations.push(a);

    // Stage 2: Pull hands inward towards body
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);

    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * NEED - Right hand bent index hook pressing downward firmly twice
 */
export const NEED = (ref) => {
    let a = [];
    // Stage 1: Right hand hooked index finger
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2.5, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(a);

    // Press 1 Down
    a = [];
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/4, "+"]);
    ref.animations.push(a);

    // Release 1
    a = [];
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    ref.animations.push(a);

    // Press 2 Down
    a = [];
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/4, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * LIKE (ISL) - one hand, at the upper chest (heart side).
 * Handshape: open pinch - thumb and index fingertips curved toward each other
 * (not yet touching), middle, ring and little fingers extended.
 * Location / orientation: the hand is held upright (fingers up) at the upper
 * chest just right of centre, palm facing the avatar's left, so the
 * thumb/index pinch rests against the chest.
 * Movement: the thumb and index close on the chest (as if picking the shirt
 * over the heart) and the hand pulls straight out ~8 cm; it goes back to the
 * chest, opens, and plucks outward a second time, then returns to rest.
 */
export const LIKE = (ref) => {
    let a = [];
    // Stage 1: open-pinch hand raised to the upper chest, pinch touching it
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0.728, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0.666, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0.433, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.125, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.121, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.075, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -0.079, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.331, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.08, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.025, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.943, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.1, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.626, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.87, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.991, "-"]);
    ref.animations.push(a);

    // Stage 2: thumb and index close on the chest and pluck outward
    a = [];
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.195, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.21, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.257, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.161, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.467, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.05, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.058, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.763, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.771, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -1.059, "-"]);
    ref.animations.push(a);

    // Stage 3: back to the chest, pinch opens again
    a = [];
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.125, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.121, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.075, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.079, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.331, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.08, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.025, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.943, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.87, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.991, "+"]);
    ref.animations.push(a);

    // Stage 4: second pluck outward
    a = [];
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.195, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.21, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.257, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.161, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.467, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.05, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.058, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.763, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.771, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -1.059, "-"]);
    ref.animations.push(a);

    // Reset to the default pose
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * KNOW (ISL) - one hand, contact sign at the side of the forehead.
 * Handshape: 'A' fist with the thumb extended (fingers curled into the palm,
 * thumb sticking out from the index side).
 * Location / orientation: the fist is raised beside the right side of the
 * face, knuckles pointing up, palm facing the head (avatar's left), so the
 * thumb tip points into the right temple / side of the forehead.
 * Movement: the thumb taps the temple twice (contact, lift ~4 cm, contact),
 * then the hand returns to rest.
 * (Differs from THINK - index finger at the forehead - and from UNDERSTAND -
 * index flicking open in front of the forehead.)
 */
export const KNOW = (ref) => {
    let a = [];
    // Stage 1: form the 'A' fist (thumb out) and raise it beside the temple,
    // thumb hovering just off the head.
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0.6, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.6, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -0.813, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.095, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.179, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.1, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.246, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.088, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.279, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.748, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.078, "+"]);
    ref.animations.push(a);

    // Stage 2: tap 1 - thumb tip touches the right temple
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.89, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.2, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.255, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.258, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.717, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.052, "-"]);
    ref.animations.push(a);

    // Stage 3: lift the thumb slightly off the temple
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.813, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.179, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.246, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.088, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.279, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.748, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.078, "+"]);
    ref.animations.push(a);

    // Stage 4: tap 2 - thumb touches the temple again
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.89, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.2, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.255, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.258, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.717, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.052, "-"]);
    ref.animations.push(a);

    // Reset to the default pose
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
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * UNDERSTAND (ISL) - one hand at the forehead, handshape change.
 * Handshape: starts as a closed fist with the thumb out (thumb tip pointing
 * back toward the forehead), then the index finger springs straight up
 * (index + thumb extended).
 * Location / orientation: held close in front of the right side of the
 * forehead (no contact), knuckles up, palm facing the avatar's left / head.
 * Movement: the index flicks up from the fist twice (closed -> open, closed
 * -> open) with a small 'got it' nod on each flick, then the hand returns to
 * rest. (Differs from KNOW, where the closed thumb-out fist taps the temple
 * with the thumb and never opens.)
 */
export const UNDERSTAND = (ref) => {
    let a = [];
    // Stage 1: closed fist, thumb out, raised in front of the right forehead
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 1.35, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 1.35, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0.9, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0.6, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.6, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -1.085, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.709, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.25, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.1, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.565, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.1, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.245, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.072, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.569, "-"]);
    ref.animations.push(a);

    // Stage 2: index finger flicks straight up, small nod
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12 + 0.14, "+"]);
    ref.animations.push(a);

    // Stage 3: index curls back into the fist, head comes back up
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 1.35, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 1.35, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0.9, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    // Stage 4: index finger flicks straight up, small nod
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12 + 0.14, "+"]);
    ref.animations.push(a);

    // Reset to the default pose
    a = [];
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
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * ASK (ISL) - one hand, directional verb moving from the signer toward the
 * person being asked.
 * Handshape: index finger extended (middle, ring and little finger curled,
 * thumb folded against the side), crooking into a hooked 'X' index as the
 * hand moves out.
 * Location / orientation: starts in front of the mouth/chin with the index
 * pointing up and the palm facing the avatar's left; ends ~20 cm further out
 * toward the listener at chest-chin height, palm still facing left so the
 * hook is seen in profile.
 * Movement: one forward push from the mouth toward the addressee while the
 * index bends into the hook, with the head tilting slightly forward (ISL
 * question face), then the hand returns to rest.
 * (Differs from TELL / ANSWER, whose straight index moves out from the chin
 * without hooking.)
 */
export const ASK = (ref) => {
    let a = [];
    // Stage 1: index hand raised in front of the mouth, index pointing up
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.4, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -0.474, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.217, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.152, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.156, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.817, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.25, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.388, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.653, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.7, "-"]);
    ref.animations.push(a);

    // Stage 2: push out toward the listener, index crooking into a hook,
    // head tilting forward (question)
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0.3, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 1.1, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0.8, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.869, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.621, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.17, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.187, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.132, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.339, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.533, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12 + 0.12, "+"]);
    ref.animations.push(a);

    // Reset to the default pose
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
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};
