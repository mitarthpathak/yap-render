/**
 * Indian Sign Language (ISL) Animations: high-frequency words that a first-time
 * tester almost always says but the first vocabulary pass missed.
 *
 *   I / ME     - index finger to the centre of the chest, a light double tap
 *   MY / MINE  - flat open palm laid flat on the chest, a gentle press
 *   YOUR       - flat open palm pushed out toward the person addressed
 *   LOVE       - both fists crossed over the heart, a small hug-press
 *   MEET       - two upright index fingers brought together in front of the body
 *   MORNING    - one forearm as the horizon, the other rising like the sun
 *
 * Handshapes and movement paths follow the standard ISL forms (identical to ASL
 * for these words) documented by indiansignlanguage.org and the ISLRTC
 * dictionary. Bone deltas are derived from the already-tuned sibling signs on
 * the shared YBot rig so the rest-pose bookkeeping matches:
 *   I, MY    <- SORRY's measured "hand on the sternum" arm placement
 *   YOUR     <- NO's raised-to-shoulder arm, hand opened and pushed forward
 *   LOVE     <- PLEASE's both-hands-to-chest, closed to fists and crossed
 *   MEET     <- WAIT's both-hands-in-front + WELCOME's inward sweep
 *   MORNING  <- HELP's flat horizontal left forearm + a rising right forearm
 *
 * Every sign restores the shared rest pose on its final frame, exactly like the
 * signs in BasicSocial.js.
 */

// Trigger playback if the queue is idle (same helper the other word modules use).
const finish = (ref) => {
    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

/**
 * I / ME (ISL) - index-finger handshape: middle, ring and pinky curled, thumb
 * folded over them, index extended (slightly hooked at the knuckle). The elbow
 * is lifted out to the side and the upper arm turned inward, so the forearm
 * runs across the front of the chest toward the sternum; with the palm turned
 * toward the body, a mild wrist flexion (~40 deg, no sideways bend) aims the
 * index in and to the left at the signer. The fingertip taps the centre of the
 * chest (sternum) twice - the signer points at themself.
 * The contact pose rests the tip on the chest surface (no penetration); each
 * tap is a small elbow extension that lifts the tip ~5 cm off the chest and
 * back. On the way out the finger lifts off and the wrist straightens before
 * the arm drops, so the fingertip never sweeps through the chest.
 */
export const I = (ref) => {
    // Hand shape + approach: index pointing at the chest, tip ~9 cm in front.
    let a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2.5, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2.5, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2.5, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);

    // Elbow out to the side, upper arm turned in: the forearm crosses the
    // chest, so only a mild wrist flexion is needed to aim the index inward.
    a.push(["mixamorigRightArm", "rotation", "x", 0.134, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.381, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.288, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.4, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.9, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.339, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.927, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.058, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.707, "+"]);
    ref.animations.push(a);

    // Tap the fingertip on the chest twice (contact -> lift -> contact).
    a = []; a.push(["mixamorigRightForeArm", "rotation", "y", 2.091, "+"]); ref.animations.push(a);
    a = []; a.push(["mixamorigRightForeArm", "rotation", "y", 1.98, "-"]); ref.animations.push(a);
    a = []; a.push(["mixamorigRightForeArm", "rotation", "y", 2.091, "+"]); ref.animations.push(a);

    // Lift the finger off the chest and straighten the wrist first, so the
    // fingertip never sweeps through the chest on the way back.
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.9, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    // Reset to the shared rest pose.
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
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
    a.push(["mixamorigRightArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    ref.animations.push(a);
    finish(ref);
};

/**
 * MY / MINE (ISL) - flat open hand (all fingers extended and together, thumb
 * alongside) laid on the centre of the chest, palm against the body and
 * fingers pointing across to the left; the palm pats the chest twice.
 * Distinct from I (index tip pointing at the chest). The contact pose rests
 * the palm on the chest surface; each pat lifts it ~4 cm away and back.
 */
export const MY = (ref) => {
    // Approach: flat hand in front of the chest, palm facing it, ~8 cm away.
    let a = [];
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.4, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.20, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.37, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.91, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.08, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.87, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.03, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.03, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.24, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.84, "+"]);
    ref.animations.push(a);

    // Palm onto the chest, lift, and onto the chest again (two pats).
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.06, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.10, "+"]);
    ref.animations.push(a);
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.16, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.95, "-"]);
    ref.animations.push(a);
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.06, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.10, "+"]);
    ref.animations.push(a);

    // Reset to the shared rest pose.
    a = [];
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

/**
 * YOUR (ISL) - flat open hand (fingers extended and together, thumb held in
 * beside the index), palm facing the person addressed and fingers up, raised
 * in front of the right chest and pushed forward toward that person twice
 * (push - draw back - push).
 * Distinct from YOU, which points the index finger at the person.
 */
export const YOUR = (ref) => {
    // Flat hand up in front of the right chest, palm turned toward the viewer.
    let a = [];
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.4, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.16, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.40, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.99, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.12, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.73, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.02, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 1.30, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.33, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.85, "-"]);
    ref.animations.push(a);

    // Push the palm out toward the person (~10 cm), draw back, push again.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.46, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.59, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.26, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.92, "-"]);
    ref.animations.push(a);
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.26, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.46, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.58, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.87, "+"]);
    ref.animations.push(a);
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.46, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.59, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.26, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.92, "-"]);
    ref.animations.push(a);

    // Reset to the shared rest pose.
    a = [];
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    ref.animations.push(a);
    finish(ref);
};

/**
 * LOVE (ISL) - both hands close into fists (S hand: fingers curled into the
 * palm, thumb across them) and the forearms fold across the chest, crossing in
 * front of the heart, right arm over left, each fist resting near the opposite
 * upper chest with the palm side toward the body (hugging something dear). The
 * upper body then rocks gently side to side in the hug before the arms open
 * back to rest.
 */
export const LOVE = (ref) => {
    let a = [];
    // Fists (left finger curl is NEGATIVE z).
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
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    // Forearms cross over the heart, right arm in front, fists to the
    // opposite upper chest, palms toward the body.
    a.push(["mixamorigRightArm", "rotation", "x", -0.9, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.95, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 1.1, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.8, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.6, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -1.1, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.95, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -0.5, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/8, "+"]);
    ref.animations.push(a);

    // Hug: rock the upper body gently one way, then the other, then centre.
    a = [];
    a.push(["mixamorigSpine", "rotation", "y", 0.15, "+"]);
    ref.animations.push(a);
    a = [];
    a.push(["mixamorigSpine", "rotation", "y", -0.15, "-"]);
    ref.animations.push(a);
    a = [];
    a.push(["mixamorigSpine", "rotation", "y", 0, "+"]);
    ref.animations.push(a);

    // Reset.
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

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);
    finish(ref);
};

/**
 * MEET (ISL) - both hands take the "1" handshape: index finger straight and
 * pointing up, middle/ring/pinky curled, thumb folded over them. The hands
 * rise in front of the lower chest about shoulder-width apart, palms facing
 * each other (index fingers upright like two people standing), then glide in
 * toward the centre until the two index fingers meet side by side in front of
 * the chest, a light contact, and the hands drop back to rest.
 */
export const MEET = (ref) => {
    let a = [];
    // "1" handshape on both hands (left finger curl is NEGATIVE z).
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/3, "+"]);

    // Both hands up in front of the lower chest, apart, index fingers upright,
    // palms facing each other.
    a.push(["mixamorigRightArm", "rotation", "x", -0.4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.45, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.4, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.8, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.8, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.45, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -0.8, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.8, "+"]);
    ref.animations.push(a);

    // The two index fingers travel inward and meet at the centre.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "y", 0.9, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.9, "-"]);
    ref.animations.push(a);

    // Reset.
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

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

/**
 * MORNING (ISL) - the sun coming up. The left flat hand, palm down, lies
 * horizontal across the body at lower-chest height with its fingertips at the
 * inside of the right elbow (the horizon). The right flat hand starts with the
 * forearm lying across the body above it, fingers pointing left and palm toward
 * the body; keeping the elbow in place over the left hand, the right forearm
 * then rises up beside the face, fingers up and palm facing the signer, like the
 * sun rising over the horizon. The head lifts as the sun rises.
 */
export const MORNING = (ref) => {
    let a = [];
    // Left forearm: the horizon, fingertips at the right elbow.
    a.push(["mixamorigLeftArm", "rotation", "x", -0.35, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -1.4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.45, "+"]);

    // Right forearm lies across the body, palm toward the body.
    a.push(["mixamorigRightArm", "rotation", "x", -0.6, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.9, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 1.3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.3, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.2, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/9, "+"]);
    ref.animations.push(a);

    // The sun rises: the forearm pivots up at the elbow to beside the face.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "y", 0.3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", 0, "-"]);
    ref.animations.push(a);

    // Reset.
    a = [];
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "+"]);
    ref.animations.push(a);
    finish(ref);
};
