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
 * LIKE - Right open hand on chest pulling outward while thumb and middle pinch together
 */
export const LIKE = (ref) => {
    let a = [];
    // Stage 1: Right hand open on chest
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    ref.animations.push(a);

    // Stage 2: Pull outward and pinch thumb and middle finger
    a = [];
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * KNOW - Right index / fingertips tapping temple twice
 */
export const KNOW = (ref) => {
    let a = [];
    // Stage 1: Right hand up near temple
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.1, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    ref.animations.push(a);

    // Tap 1
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/1.9, "+"]);
    ref.animations.push(a);

    // Pull slightly
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.1, "-"]);
    ref.animations.push(a);

    // Tap 2
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/1.9, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * UNDERSTAND - Right fist near temple, index finger flicking up with an 'aha' nod
 */
export const UNDERSTAND = (ref) => {
    let a = [];
    // Stage 1: Right hand fist near temple
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.1, "+"]);
    ref.animations.push(a);

    // Stage 2: Flick index finger up & nod
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/6, "+"]);
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
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * ASK - Both hands curved together moving forward from chest in inquiry gesture
 */
export const ASK = (ref) => {
    let a = [];
    // Stage 1: Hands near chest, palms facing each other slightly curved
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/8, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);
    ref.animations.push(a);

    // Stage 2: Move hands forward in inquiry
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3, "-"]);
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
