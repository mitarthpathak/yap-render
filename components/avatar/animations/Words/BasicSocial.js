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
 * SORRY - ISL "sorry": right closed 'S' fist (fingers curled into the palm,
 * thumb folded across the front of the curled index and middle fingers)
 * pressed on the centre of the chest (sternum), knuckles pointing up and to
 * the signer's left, palm angled in toward the chest. The fist closes in
 * front of the chest, is pressed on, and, keeping contact, rubs one
 * clockwise circle of about 7 cm (signer's view: top -> out -> down -> in ->
 * top) while the head bows slightly in apology; it then lifts off and the
 * hand returns to rest.
 * Measured (cm): wrist circle top [-7,52,19] / out [-11,49,19] /
 * bottom [-7,45,20] / in [-4,49,20]; the thumb side of the fist touches the
 * chest (<= 0.7 cm) and the curled fingers stay within ~1 cm of it.
 */
export const SORRY = (ref) => {
    let a = [];
    // Stage 1: form the 'S' fist in front of the chest.
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
    // thumb folded across the curled index and middle fingers
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.15, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.2, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.6, "-"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", -1.4, "-"]);
    // arm brings the fist in front of the chest, ~6 cm off it, while it closes
    a.push(["mixamorigRightArm", "rotation", "x", -0.52, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.68, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.98, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.22, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.83, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.17, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.52, "+"]);
    ref.animations.push(a);

    // Stage 2: press the fist onto the sternum (top of the circle), head bows.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.37, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.65, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.05, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/9, "+"]);
    ref.animations.push(a);

    // One clockwise circle rubbed on the chest: out -> down -> in -> up.
    a = []; // out (signer's right)
    a.push(["mixamorigRightArm", "rotation", "x", -0.19, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.49, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.08, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.34, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.7, "+"]);
    ref.animations.push(a);
    a = []; // down
    a.push(["mixamorigRightArm", "rotation", "y", 0.67, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.91, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.3, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.74, "+"]);
    ref.animations.push(a);
    a = []; // in (toward the midline)
    a.push(["mixamorigRightArm", "rotation", "x", -0.35, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.82, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.9, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.41, "-"]);
    ref.animations.push(a);
    a = []; // up (back to the top)
    a.push(["mixamorigRightArm", "rotation", "x", -0.37, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.65, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.05, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.17, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.52, "-"]);
    ref.animations.push(a);

    // Lift the fist off the chest before the hand opens; head comes up.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.52, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.68, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.83, "-"]);
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
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * WELCOME - ISL "welcome": both flat open hands (fingers together, thumbs
 * relaxed), palms facing up, start held forward and slightly out at
 * lower-chest height as if offering, then draw back in an arc toward the
 * chest, fingertips turning in toward each other - inviting the person in -
 * with a small friendly nod. Symmetrical two-handed sign; then rest.
 * Measured (cm): start wrists ~[+-33,47,34], fingers forward, palms up;
 * end wrists ~[+-15,50,21] just in front of the lower chest, fingertips
 * ~6 cm apart, palms up.
 */
export const WELCOME = (ref) => {
    let a = [];
    // Stage 1: both hands forward and slightly out, palms turned up
    a.push(["mixamorigRightArm", "rotation", "x", -0.6, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.15, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.3, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -2.0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.2, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -0.6, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.15, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.3, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -2.0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.2, "+"]);
    ref.animations.push(a);

    // Stage 2: draw both palm-up hands in toward the chest, with a nod
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.15, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.38, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.05, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.3, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -0.15, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.38, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -2.05, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.3, "+"]);

    a.push(["mixamorigNeck", "rotation", "x", Math.PI/7, "+"]);
    ref.animations.push(a);

    // Stage 3: Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);

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
 * STOP - ISL "stop": the right flat hand (fingers together and straight,
 * thumb alongside the index) is raised in front of the right shoulder at
 * chin height, fingers pointing up and the palm facing forward toward the
 * person addressed - the "halt" hand - and is then pushed firmly forward
 * about 12 cm and held for a beat before returning to rest.
 * Measured (cm): raised - wrist ~[-16,60,22], palm centre ~[-15,66,24],
 * palm toward the viewer, fingers up; pushed - wrist ~[-16,60,34], palm
 * centre ~[-15,66,37]. The hand stays beside, not in front of, the face.
 * Distinct from WAIT (both palms down, patting) and HELLO (wave beside the
 * head).
 */
export const STOP = (ref) => {
    let a = [];
    // Stage 1: raise the flat hand in front of the right shoulder, palm forward
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.7, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.6, "-"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", -0.6, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.38, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.55, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.94, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.37, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.08, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.18, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 1.03, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.42, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.27, "-"]);
    ref.animations.push(a);

    // Stage 2: firm push forward toward the person - "halt!"
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.68, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.68, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.1, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.47, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 1.22, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.33, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.48, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * WAIT - ISL "wait": both flat open hands (fingers together, pointing
 * forward) held in front of the lower chest about shoulder-width apart,
 * palms facing down, make two small, calm downward pats (down-up-down) -
 * the "hold on / wait" gesture - then return to rest.
 * Measured (cm): wrists ~[+-26,52,30] up, ~[+-28,46,31] down (palms down,
 * fingertips dipping ~8 cm on each pat).
 */
export const WAIT = (ref) => {
    let a = [];
    // Stage 1: both hands in front of the lower chest, palms down
    a.push(["mixamorigRightArm", "rotation", "x", -0.45, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.2, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.65, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 1.2, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.3, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -0.45, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.2, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.65, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 1.2, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -0.3, "-"]);
    ref.animations.push(a);

    // Two gentle downward pats: down -> up -> down
    // Pat 1 down
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.38, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.5, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.2, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.38, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -0.2, "+"]);
    ref.animations.push(a);

    // Back up
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.45, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.65, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.3, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.45, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.65, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -0.3, "-"]);
    ref.animations.push(a);

    // Pat 2 down
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.38, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.5, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.2, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.38, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -0.2, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};
