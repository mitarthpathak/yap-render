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
 * COME - ISL: both hands flat (B handshape: fingers together, thumb alongside
 * the index), palms up, fingers pointing forward. The hands start held out in
 * front at chest height, shoulder-width apart, and are drawn straight back in
 * toward the signer's chest, the palms tipping up toward the body at the end
 * ("come to me"). Same handshape and path as GO, but palms up and moving
 * toward the body.
 */
export const COME = (ref) => {
    let a = [];
    // Stage 1: both flat hands held out in front at chest height, palms up, fingers forward.
    a.push(["mixamorigRightArm", "rotation", "x", -0.8, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.3, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.7, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.1, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.3, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.8, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -0.8, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -1.7, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.1, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "y", 0.3, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "z", 0.8, "+"]);
    ref.animations.push(a);

    // Stage 2: draw both hands back in to the chest, palms tipping up toward the signer.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0.1, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.2, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.9, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.4, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0.1, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.2, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.9, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -1.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -0.4, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * GO - ISL: both hands flat (B handshape: fingers together, thumb alongside
 * the index), palms down, fingers pointing forward. The hands start close in
 * front of the lower chest, about shoulder-width apart, and move forward, away
 * from the signer, rising slightly to chest height as the arms extend. Same
 * handshape and path as COME, but palms down and moving away from the body.
 * (Replaces the old ASL-style pair of index fingers, whose left fingers bent
 * backwards.)
 */
export const GO = (ref) => {
    let a = [];
    // Stage 1: both flat hands close in front of the lower chest, palms down, fingers forward.
    a.push(["mixamorigRightArm", "rotation", "x", 0.1, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.2, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.9, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 1.15, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.25, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.3, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.8, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0.1, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.2, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.9, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 1.15, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -0.25, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "y", 0.3, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "z", 0.8, "+"]);
    ref.animations.push(a);

    // Stage 2: push both hands forward, away from the body, arms extending to chest height.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.0, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -0.8, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.0, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * GIVE - ISL directional verb: the right hand, flat (B handshape: fingers
 * together, thumb alongside the index) with the palm up and fingers pointing
 * forward, starts close in front of the lower chest (the giver) and moves
 * forward, away from the body, toward the person in front (the receiver), as
 * if handing something over. One-handed; the left hand stays at rest (this
 * keeps it distinct from the two-handed COME and GO).
 */
export const GIVE = (ref) => {
    let a = [];
    // Stage 1: flat right hand close in front of the lower chest, palm up, fingers forward.
    a.push(["mixamorigRightArm", "rotation", "x", 0.1, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.2, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.9, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.6, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.2, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.3, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.8, "-"]);
    ref.animations.push(a);

    // Stage 2: move the palm-up hand forward, away from the body, to the receiver.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.8, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.7, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.1, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);
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
 * fingers pointing across to the left; it then moves down and forward away
 * from the chest in a small downward arc, turning so the palm ends facing
 * down in front of the body. Then back to rest.
 * HamNoSys (ISL corpus): flat hand, fingers left, palm to chest, touch chest,
 * move down-out with a downward arc while the palm turns down.
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

    // Stage 2: arc down and out from the chest, palm turning to face down.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.59, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", -0.20, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.27, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.96, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.28, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.24, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.80, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.14, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * NEED - ISL "need" (zaroorat): two-handed, symmetric. Both flat hands
 * (thumbs out), palms UP and fingers pointing forward, are held up at
 * shoulder height; both move firmly DOWN to the stomach while closing into
 * fists (palms still up). Then back to rest. Distinct from WANT, which is
 * one flat hand on the chest arcing down and out.
 * HamNoSys (ISL corpus): symmetric, flat hands palm up at shoulders, move
 * down, replace -> fists at the stomach.
 */
export const NEED = (ref) => {
    let a = [];
    // Stage 1: both open hands, palms up, raised to shoulder height.
    a.push(["mixamorigRightArm", "rotation", "x", -0.72, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -0.14, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.30, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.42, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.70, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.12, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.83, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.08, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.76, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -0.72, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0.14, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.30, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0.42, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.70, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.12, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -1.83, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -0.08, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.76, "+"]);
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

    a.push(["mixamorigRightArm", "rotation", "x", -0.31, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.46, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.07, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -0.31, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.46, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.07, "-"]);
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
    a.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
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
