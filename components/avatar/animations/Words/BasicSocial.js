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
 * PLEASE - ISL "please": right flat hand (fingers together and extended),
 * palm flat on the centre of the chest, fingers pointing across to the left,
 * rubbed in small circles (two loops) on the chest with a polite expression.
 * The palm stays in contact with the chest (palm-centre gap <= ~1.2 cm) all
 * the way round; the left hand stays at rest, well clear of the right
 * fingertips. Distinct from SORRY, which rubs a closed fist on the chest.
 * The hand arrives at the outer (avatar's right) side of the circle, then
 * circles twice. Circle points (palm centre, cm; ~8 cm across, centred on
 * the sternum):
 *   outer [-7,53] -> bottom [-2,49] -> inner [1,52] -> top [-2,57]
 * The hand then lifts forward off the chest (~5 cm) before dropping to rest.
 */
export const PLEASE = (ref) => {
    // Pose columns: RightArm.x, RightArm.y, RightArm.z, RightForeArm.y,
    // RightHand.x, RightHand.y, RightHand.z.
    const axes = [
        ["mixamorigRightArm", "x"], ["mixamorigRightArm", "y"], ["mixamorigRightArm", "z"],
        ["mixamorigRightForeArm", "y"],
        ["mixamorigRightHand", "x"], ["mixamorigRightHand", "y"], ["mixamorigRightHand", "z"],
    ];
    const rest = [0, 0, Math.PI / 3, Math.PI / 1.5, 0, 0, 0];
    const top = [-0.357, 0.588, 1.238, 2.174, -0.787, -0.428, 0.751];
    const outer = [-0.115, 0.459, 1.129, 2.116, -1.036, -0.243, 0.892];
    const bottom = [-0.147, 0.567, 1.278, 1.965, -1.032, -0.468, 0.807];
    const inner = [-0.298, 0.741, 1.234, 1.959, -0.992, -0.352, 0.79];
    const liftOff = [-0.323, 0.589, 1.186, 1.865, -1.02, -0.31, 0.876];

    let cur = rest;
    const goTo = (pose) => {
        const a = [];
        axes.forEach(([bone, axis], i) => {
            if (pose[i] !== cur[i]) a.push([bone, "rotation", axis, pose[i], pose[i] > cur[i] ? "+" : "-"]);
        });
        ref.animations.push(a);
        cur = pose;
    };

    // Stage 1: flat hand comes onto the chest, palm in (outer side of the
    // circle).
    goTo(outer);
    // Stage 2: rub two circles on the chest: bottom -> inner -> top -> outer.
    goTo(bottom); goTo(inner); goTo(top);
    goTo(outer);
    goTo(bottom); goTo(inner); goTo(top);
    // Stage 3: lift the hand forward off the chest.
    goTo(liftOff);
    // Stage 4: reset to the shared rest pose.
    goTo(rest);

    finish(ref);
};

/**
 * SORRY - ISL "sorry": right closed fist ('A' hand: fingers curled into the
 * palm, thumb resting up along the index) placed on the centre of the chest,
 * palm side against the chest, knuckles pointing across to the left and the
 * back of the hand toward the viewer. The fist rubs two small clockwise
 * circles (signer's view: top -> out -> down -> in) on the sternum while the
 * head bows slightly in apology, then the hand returns to rest.
 * Measured (cm): fist on the chest at wrist ~[-2,50,24], index knuckles
 * ~[4,54,20]; circle top ~y53, bottom ~y48, out ~x-5, in ~x0.
 */
export const SORRY = (ref) => {
    let a = [];
    // Stage 1: form the 'A' fist and bring it onto the chest (top of circle).
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
    a.push(["mixamorigRightArm", "rotation", "x", -0.53, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.95, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.15, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.75, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.7, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.65, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/8, "+"]);
    ref.animations.push(a);

    // Two small clockwise circles on the chest: out -> down -> in -> up.
    for (let loop = 0; loop < 2; loop++) {
        a = []; // out (avatar's right)
        a.push(["mixamorigRightArm", "rotation", "x", -0.45, "+"]);
        a.push(["mixamorigRightArm", "rotation", "y", 0.84, "-"]);
        a.push(["mixamorigRightHand", "rotation", "z", 0.85, "+"]);
        ref.animations.push(a);
        a = []; // down
        a.push(["mixamorigRightArm", "rotation", "x", -0.37, "+"]);
        a.push(["mixamorigRightArm", "rotation", "y", 0.95, "+"]);
        a.push(["mixamorigRightHand", "rotation", "z", 0.6, "-"]);
        ref.animations.push(a);
        a = []; // in (toward the midline)
        a.push(["mixamorigRightArm", "rotation", "x", -0.45, "-"]);
        a.push(["mixamorigRightArm", "rotation", "y", 0.97, "+"]);
        a.push(["mixamorigRightHand", "rotation", "z", 0.5, "-"]);
        ref.animations.push(a);
        a = []; // up
        a.push(["mixamorigRightArm", "rotation", "x", -0.53, "-"]);
        a.push(["mixamorigRightArm", "rotation", "y", 0.95, "-"]);
        a.push(["mixamorigRightHand", "rotation", "z", 0.65, "+"]);
        ref.animations.push(a);
    }

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
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
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
 * HELP - ISL "help": left flat hand held palm-up in front of the body as a
 * base; right 'A' fist (fingers curled, thumb extended and pointing up) rests
 * on the left palm, little-finger side down. Both hands then lift upward
 * together (~12 cm), the fist staying on the palm, then return to rest.
 * The base hand is placed first and the fist set down onto it, so the hands
 * never pass through each other.
 *   set-up  R fist wrist ~[-4,54,34] cm on L palm (L wrist ~[9,47,36], palm up)
 *   lift    R wrist ~[-4,66,33], L wrist ~[9,60,37]
 */
export const HELP = (ref) => {
    let a = [];
    // Stage 1: left palm turns up as the base; the right thumb-up fist forms
    // and arrives just above it.
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

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4.6 - 0.15, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/2.3, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/3, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/6, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/3.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/2.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/1.5, "-"]);
    ref.animations.push(a);

    // The fist settles down onto the waiting left palm.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4.6, "+"]);
    ref.animations.push(a);

    // Stage 2: both hands lift upward together, fist staying on the palm.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4.6 - 0.3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/6 - 0.3, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.3, "+"]); // keep palm up
    ref.animations.push(a);

    // Reset to the shared rest pose.
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
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
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
 * THANK_YOU - ISL "thank you": right flat hand (B, fingers together, thumb
 * alongside), fingertips touching the lips/chin with the palm toward the face,
 * then the hand moves forward and down toward the person thanked, opening to
 * palm-up, with a small bow of the head. One outward movement, then rest.
 *   stage 1a wrist ~[-17,54,18] cm, flat hand up in front of the mouth,
 *            palm toward the face, fingers up (elbow low at the side)
 *   stage 1b fingertips tip back onto the lips (middle tip ~[-2,72,16],
 *            index tip ~[-5,73,15]); wrist bend ~40 deg, almost all palm-ward
 *            flexion (radial/sideways bend ~10 deg)
 *   stage 2  wrist ~[-16,48,40], hand out in front of the chest, palm up,
 *            fingers toward the person, head bowed
 */
export const THANK_YOU = (ref) => {
    let a = [];
    // Stage 1a: flat hand rises in front of the face, fingers up, palm in.
    // Elbow low at the side, forearm angled up and in.
    a.push(["mixamorigRightArm", "rotation", "x", -0.225, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.283, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.176, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.208, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.054, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.141, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.3, "+"]);
    ref.animations.push(a);

    // Stage 1b: the fingertips tip back onto the lips (palm-ward wrist flexion
    // ~40 deg, sideways/radial bend ~10 deg).
    a = [];
    a.push(["mixamorigRightHand", "rotation", "z", 0.692, "+"]);
    ref.animations.push(a);

    // Stage 2: hand moves forward and down off the chin toward the person,
    // the palm turning up; the head gives a small bow.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", Math.PI / 4, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 3, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 1.5, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 7, "+"]);
    ref.animations.push(a);

    // Reset to the shared rest pose.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 12, "-"]);
    ref.animations.push(a);
    finish(ref);
};

/**
 * STOP - ISL "stop": the left flat hand is held palm up in front of the
 * lower chest as a base (fingers forward and slightly to the right); the
 * right flat hand (fingers together, thumb alongside), held on edge with
 * the little-finger side down and the palm facing the signer, is raised
 * above it and then chops sharply straight down so its little-finger edge
 * lands across the middle of the left palm. Then both hands rest.
 * Measured (cm): left wrist ~[13,51,29], palm up, fingertips ~[4,49,50];
 * right wrist raised ~[-15,63,40] (beside, not in front of, the face) ->
 * on the left palm ~[-4,57,36], right fingertips ~[14,58,50] crossing it.
 */
export const STOP = (ref) => {
    let a = [];
    // Stage 1: left palm turns up as the base, right blade hand lifts above it
    a.push(["mixamorigLeftArm", "rotation", "x", -0.4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.6, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.7, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -2.0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.6, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -0.92, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.8, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.1, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.3, "-"]);
    ref.animations.push(a);

    // Stage 2: sharp chop down - right little-finger edge lands on the left palm
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.8, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 1.1, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.25, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.9, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
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
