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
 * ASK (ISL) - one hand, open pinch drawn in from arm's length to the chest.
 * Source: the ISL HamNoSys (eSign) entries "ask question" / "ask anything"
 * (askquestion.sigml / askanything.sigml, shipped identically by several
 * ISL text-to-sign corpora): hampinchopen, extfinger left-between-out,
 * palm left, chest, arm extended, move in.
 * Handshape: open pinch - index finger curved down toward the raised thumb
 * with a small gap between their tips; middle, ring and little fingers
 * extended.
 * Location / orientation: chest height, in front of the right chest, arm
 * extended forward; fingers point out and toward the avatar's left, palm
 * facing the avatar's left.
 * Movement: one move straight in toward the signer's chest (~17 cm), the
 * open pinch held, with the head tilting slightly forward (ISL question
 * face); then the hand returns to rest.
 * (Differs from TELL / ANSWER - straight index from the chin - from LIKE -
 * fingers-up pinch closing on the chest and plucking out twice - and from
 * TAKE / COME / WANT - hand closing or palm-up beckoning.)
 */
export const ASK = (ref) => {
    let a = [];
    // Stage 1: open pinch held out at arm's length, chest height, fingers
    // pointing out-left, palm left
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0.7, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 1.2, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0.9, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0.1, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0.15, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0.2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.5, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0.4, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.2, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -0.95, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.8, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.1, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.15, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.25, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.2, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.25, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.15, "-"]);
    ref.animations.push(a);

    // Stage 2: draw the pinch straight in toward the chest; head tilts
    // forward (question)
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.45, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.9, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.5, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12 + 0.12, "+"]);
    ref.animations.push(a);

    // Reset to the default pose
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};
