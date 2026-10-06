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
 * TAKE - ISL "take" (lena): the right flat hand, thumb out, fingers pointing
 * forward and palm UP, reaches out in front of the chest, then moves IN toward
 * the chest while closing into a fist (S-hand, palm up) - grabbing something
 * and bringing it to oneself. Then back to rest.
 * HamNoSys (ISL corpus): flat hand, ext. fingers out, palm up, near chest,
 * move in, replace -> fist.
 */
export const TAKE = (ref) => {
    let a = [];
    // Stage 1: open right hand, palm up, reached forward at chest height.
    a.push(["mixamorigRightArm", "rotation", "x", -0.74, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.30, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.28, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.48, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.17, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.21, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -2.1, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.26, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.28, "-"]);
    ref.animations.push(a);

    // Stage 2: the hand pulls in to the chest and closes into a fist (palm up).
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2.2, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2.2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2.2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2.2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -0.34, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.26, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.03, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.88, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.18, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.77, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.62, "-"]);
    ref.animations.push(a);

    // Reset
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
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * WANT - ISL "want" (chahna): one-handed. The right flat hand (fingers
 * together, thumb out) is laid on the chest, palm against the body and
 * fingers pointing across to the left; it then moves down and out from the
 * chest in a small downward arc while the hand rolls over about the finger
 * axis, so it ends palm DOWN with the fingers still pointing left, in front
 * of the lower chest. Then back to rest.
 * HamNoSys (ISL corpus, want.sigml): flat hand, thumb out, fingers left, palm
 * to the body, touch the chest; move down-out with a downward arc while the
 * palm turns down (finger direction unchanged).
 */
export const WANT = (ref) => {
    let a = [];
    // Stage 1: flat hand laid on the chest, palm in, fingers pointing left.
    a.push(["mixamorigRightArm", "rotation", "x", -0.65, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.01, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.92, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.99, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.20, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.10, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.89, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.37, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.40, "+"]);
    ref.animations.push(a);

    // Stage 2: arc down and out from the chest; the hand rolls about the
    // finger axis so the palm faces down, fingers still pointing left.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.84, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -0.08, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.99, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.94, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.60, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.27, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.64, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.55, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.03, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * NEED - ISL "need" (zaroorat): two-handed, symmetric (mirrored). Both flat
 * hands (thumbs out), palms UP, are held in front of the upper chest with the
 * fingers pointing toward each other across the body (right hand's fingers to
 * the left, left hand's to the right, fingertips nearly meeting at the
 * midline, like holding a tray); both move firmly DOWN to the front of the
 * stomach while closing into palm-up fists, knuckles still toward the
 * midline. Then back to rest. Distinct from WANT, which is one flat hand on
 * the chest arcing down and out.
 * HamNoSys (ISL corpus, SignFiles/need.sigml): symmetric, flat hands, fingers
 * left (mirrored), palms up at the shoulders; move down, replace -> fists
 * (fingers left, palms up) at the stomach.
 */
export const NEED = (ref) => {
    let a = [];
    // Stage 1: both open hands, palms up, fingertips pointing at each other.
    a.push(["mixamorigRightArm", "rotation", "x", -0.53, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -0.35, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.30, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.78, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.92, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.30, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -2.20, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.73, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.75, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -0.53, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0.35, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.30, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0.78, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.92, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.30, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -2.20, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0.73, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.75, "+"]);
    ref.animations.push(a);

    // Stage 2: both hands drop firmly to the stomach and close into fists.
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2.2, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2.2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2.2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2.2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/2.2, "-"]);
    a.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2.2, "-"]);
    a.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2.2, "-"]);
    a.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2.2, "-"]);
    a.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/3, "+"]);
    a.push(["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/4, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -0.24, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.57, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.28, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.35, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.08, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.89, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.90, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.33, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -0.24, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.57, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.28, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0.35, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.08, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -1.89, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0.90, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -0.33, "-"]);
    ref.animations.push(a);

    // Reset
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
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftHandThumb3", "rotation", "y", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);
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
