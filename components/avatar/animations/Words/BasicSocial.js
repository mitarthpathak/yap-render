/**
 * Indian Sign Language (ISL) Animations: Basic & Social Expressions
 * - YES, NO, PLEASE, SORRY, WELCOME, GOOD, BAD, HELP, STOP, WAIT
 */

// Helper to trigger animation if queue is idle
const finish = (ref) => {
    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

/**
 * YES - Right thumbs-up held in front of the abdomen, angled up toward the
 * viewer, giving two small forward jabs. Matches a natural human thumbs-up:
 * upper arm hangs at the side, elbow tucked, forearm ~45 deg up-and-forward,
 * fist forward of the belly with the thumb up and the fist's thumb-side to
 * the viewer.
 *
 * Bone axes measured live on the YBot rig:
 *   RightForeArm y -> ~PI/2.4 swings the forearm forward toward the viewer
 *   RightForeArm x -> -PI/5 tips the forearm up ~45 deg; the "jab" eases this
 *                     toward 0 (fist pushes forward) and back — no rotation
 *   RightHand   x -> -PI/3.5 rolls the closed fist so the thumb points up
 * The thumb is left at its rest angle (already points up out of a fist here).
 */
export const YES = (ref) => {
    let a = [];
    // Stage 1: close the fist, swing the forearm forward-and-up in front of the
    // abdomen, roll the fist so the thumb points up toward the viewer.
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/7, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/2.4, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Jab 1 — the fist eases forward toward the viewer, head dips. No rotation.
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/9, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/9, "+"]);
    ref.animations.push(a);

    // Jab 1 Back
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/5, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    // Jab 2
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/9, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/9, "+"]);
    ref.animations.push(a);

    // Jab 2 Back
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/5, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
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

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * NO - Right index finger raised to shoulder level, palm forward, wagging
 * side to side with a head shake. Same measured arm axes as HELLO.
 */
export const NO = (ref) => {
    let a = [];
    // Stage 1: Index finger up, others curled
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/10, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -Math.PI/1.95, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    ref.animations.push(a);

    // Wag Left
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);
    a.push(["mixamorigNeck", "rotation", "y", -Math.PI/8, "-"]);
    ref.animations.push(a);

    // Wag Right
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", -Math.PI/6, "-"]);
    a.push(["mixamorigNeck", "rotation", "y", Math.PI/8, "+"]);
    ref.animations.push(a);

    // Wag Left again
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);
    a.push(["mixamorigNeck", "rotation", "y", -Math.PI/8, "-"]);
    ref.animations.push(a);

    // Settle the hand centred, arm still up.
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);

    // Reset
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
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "y", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * PLEASE - Namaste / Both palms joined respectfully in front of chest
 */
export const PLEASE = (ref) => {
    let a = [];
    // Stage 1: Both hands come together with open flat palms at chest
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -Math.PI/8, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/8, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", Math.PI/8, "+"]);

    a.push(["mixamorigNeck", "rotation", "x", Math.PI/7, "+"]);
    ref.animations.push(a);

    // Stage 2: Gentle forward press of palms
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3.2, "-"]);
    ref.animations.push(a);

    // Stage 3: Reset to default pose
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);

    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * SORRY - Right closed fist ('A' hand) held flat on the centre of the chest,
 * rubbed in a circle, with an apologetic head bow. (ASL/ISL SORRY.)
 * Solved numerically: the fist sits at world y ~0.54, x ~0, z ~0.10 - on the
 * sternum - and the six circle frames trace a loop ~7 cm across on the chest.
 */
export const SORRY = (ref) => {
    let a = [];
    // Stage 1: closed fist to the centre of the chest.
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/2.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/1.2, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);

    a.push(["mixamorigNeck", "rotation", "x", Math.PI/7, "+"]);
    ref.animations.push(a);

    // Circle rub on the chest - 1.5 loops (top -> right -> bottom -> left).
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.2, "-"]); ref.animations.push(a);
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.3, "+"]); a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/2.05, "-"]); ref.animations.push(a);
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.42, "+"]); a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/2.5, "+"]); ref.animations.push(a);
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.3, "-"]); a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/3.2, "+"]); ref.animations.push(a);
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.2, "-"]); a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/2.5, "-"]); ref.animations.push(a);
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.3, "+"]); a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/2.05, "-"]); ref.animations.push(a);

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

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * WELCOME - Both open hands sweeping inward towards body in welcoming gesture
 */
export const WELCOME = (ref) => {
    let a = [];
    // Stage 1: Both hands open, extended forward-outward, palms up
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);
    ref.animations.push(a);

    // Stage 2: Sweep hands smoothly inward toward chest
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/2.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/2.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/6, "+"]);
    ref.animations.push(a);

    // Stage 3: Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);

    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * GOOD - Flat right hand, fingertips at the chin, travels forward and down and
 * turns palm-up, with a small approving nod. Distinct from YES (thumbs-up jab)
 * and close to, but lower and flatter than, THANK_YOU.
 */
export const GOOD = (ref) => {
    let a = [];
    // Stage 1: flat hand rises to the chin, palm toward the face.
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.6, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);
    ref.animations.push(a);

    // Stage 2: hand moves forward and down, palm rotating up; head nods.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/9, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4.5, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/12, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/10, "+"]);
    ref.animations.push(a);

    // Reset to the shared rest pose.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * BAD - Flat right hand, fingertips at the chin, then thrown sharply down and
 * out so the palm turns down, with the head turning away in disapproval.
 * Mirror of GOOD's direction; distinct from NO (index-finger wag).
 */
export const BAD = (ref) => {
    let a = [];
    // Stage 1: flat hand rises to the chin, palm toward the face.
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.6, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);
    ref.animations.push(a);

    // Stage 2: hand flings down and out, palm flips down; head turns away.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/7, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/8, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -Math.PI/3.5, "-"]);
    a.push(["mixamorigNeck", "rotation", "y", -Math.PI/7, "-"]);
    ref.animations.push(a);

    // Reset to the shared rest pose.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "y", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * HELP - Right fist on flat left palm, both raised upward together
 */
export const HELP = (ref) => {
    let a = [];
    // Stage 1: Left palm flat horizontal, right fist resting on it
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/8, "+"]);
    ref.animations.push(a);

    // Stage 2: Lift both hands up together (offering/asking help)
    a = [];
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
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
 * HELLO - Open right hand held up beside the head, waving side to side.
 *
 * Bone axes were measured live against the YBot rig (rest quaternions are all
 * identity, so each delta maps straight to a local Euler angle):
 *   RightArm    z  -> from the +PI/3 rest to 0 lifts the upper arm to level;
 *                     going negative would raise it overhead, which we don't want
 *   RightArm    x  -> negative brings it forward a touch
 *   RightForeArm z  -> negative is the elbow bend (forearm folds up)
 *   RightForeArm y  -> the rest twist; must return to 0 or the hand splays out
 *   RightHand   x  -> negative rolls the palm to face forward (~90 deg)
 *   RightHand   y  -> the left/right wave tilt (NOT z, which is up/down flap)
 * Both avatars run this same rig, so one set of deltas covers both.
 */
export const HELLO = (ref) => {
    let a = [];
    // Stage 1: the upper arm rises only to shoulder level (RightArm z -> 0, no
    // higher), the elbow folds so the open hand sits beside the head, and the
    // wrist rolls so the palm faces the person being greeted.
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 10, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -Math.PI / 1.95, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 2, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 7, "+"]);
    ref.animations.push(a);

    // Wave: rock the raised hand right–left–right from the wrist. The
    // per-frame hold in AvatarPlayer supplies the beat, so no separate
    // hold/settle frames are needed.
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI / 6, "+"]);
    ref.animations.push(a);
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", -Math.PI / 6, "-"]);
    ref.animations.push(a);
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI / 6, "+"]);
    ref.animations.push(a);

    // Reset to the shared rest pose.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 12, "-"]);
    ref.animations.push(a);
    finish(ref);
};

/**
 * THANK_YOU - Right flat hand, fingertips at the chin, then arcs forward and
 * down toward the person as the palm turns up, with a small bow of the head.
 * This is the standard ISL "thank you" (shared with ASL). Solved numerically -
 * the two stage-2 frames trace a CURVE (out from the chin first, then down),
 * not a straight diagonal:
 *   stage 1   hand y 0.69, x -0.09, z 0.14  (at the chin)
 *   stage 2a  hand y 0.65, x -0.15, z 0.27  (eased forward off the chin)
 *   stage 2b  hand y 0.49, x -0.17, z 0.30  (arced down, palm up)
 */
export const THANK_YOU = (ref) => {
    let a = [];
    // Stage 1: flat right hand rises to the chin, palm toward the face.
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 1.3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -Math.PI / 1.7, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI / 12, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 1.3, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 6, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 8, "+"]);
    ref.animations.push(a);

    // Stage 2a: the hand eases straight forward off the chin (curve begins).
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 1.7, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 12, "+"]);
    ref.animations.push(a);

    // Stage 2b: it then arcs down toward the person, palm turning up; head bows.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 1.9, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI / 8, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 5, "+"]);
    ref.animations.push(a);

    // Reset to the shared rest pose.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

/**
 * STOP - Open right hand chopping vertically down onto flat horizontal left palm
 */
export const STOP = (ref) => {
    let a = [];
    // Stage 1: Left hand flat palm up, right hand open held high above it
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -Math.PI/4, "-"]); // Vertical blade edge
    ref.animations.push(a);

    // Stage 2: Sharp chop down onto left palm
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * WAIT - Both open hands in front, palms facing down, pulsing downward gently twice
 */
export const WAIT = (ref) => {
    let a = [];
    // Stage 1: Both hands in front, palms down
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/6, "-"]);
    ref.animations.push(a);

    // Pulse 1 Down
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/6, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/6, "-"]);
    ref.animations.push(a);

    // Pulse 1 Up
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    ref.animations.push(a);

    // Pulse 2 Down
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/6, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/6, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};
