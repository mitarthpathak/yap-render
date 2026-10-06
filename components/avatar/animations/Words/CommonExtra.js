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
 * I / ME - middle, ring and pinky curl so the index points; the fingertip taps
 * the centre of the chest twice. SORRY parks a closed FIST on the sternum; an
 * extended index reaches ~7 cm further, so the upper arm stops well short of
 * SORRY's flexion (-PI/1.5, not -PI/1.3) and the wrist curls in less, landing
 * the fingertip on the chest surface. The taps only ever pull OUT from that
 * contact pose - they never press deeper - so the finger cannot enter the body.
 */
export const I = (ref) => {
    let a = [];
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

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/2.7, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/10, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/1.25, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/7, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/9, "+"]);
    ref.animations.push(a);

    // Tap twice: the fingertip lifts a few cm off the chest and returns. Both
    // legs stay shallower than the contact pose (-PI/1.5), never deeper.
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.8, "+"]); ref.animations.push(a);
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.5, "-"]); ref.animations.push(a);
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.8, "+"]); ref.animations.push(a);
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.5, "-"]); ref.animations.push(a);

    // Reset to the shared rest pose.
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
 * MY / MINE - flat open palm (no finger curl) laid on the centre of the chest
 * with a gentle press. Same sternum arm placement as I.
 */
export const MY = (ref) => {
    let a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/2.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/1.2, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/9, "+"]);
    ref.animations.push(a);

    // Press into the chest and ease back.
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.2, "-"]); ref.animations.push(a);
    a = []; a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.25, "+"]); ref.animations.push(a);

    // Reset.
    a = [];
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
 * YOUR - open flat hand rises to shoulder height, palm turned forward, then
 * pushes out toward the person addressed. NO's arm axes with a lighter elbow
 * bend so the arm reaches out instead of folding up beside the head.
 */
export const YOUR = (ref) => {
    let a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -Math.PI/5, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/10, "+"]);
    ref.animations.push(a);

    // Push the palm out toward the person.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -Math.PI/9, "+"]);
    ref.animations.push(a);

    // Reset.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
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
 * MORNING (ISL) - the sun coming up over the horizon. Both hands flat. The left
 * forearm lies horizontal across the body at lower-chest height, palm down,
 * its fingers passing under the right elbow (the horizon). The right forearm
 * starts lying across the body just above it, fingers pointing left and palm
 * toward the body. With the right elbow resting on the left hand as the pivot,
 * the right forearm swings up around the upper arm's own axis (RightForeArm.x)
 * until it stands upright (about 18 degrees from vertical) with the hand beside
 * the right side of the face, fingers up and palm facing the signer, like the
 * sun rising. The head lifts as the sun rises.
 */
export const MORNING = (ref) => {
    let a = [];
    // Left forearm: the horizon, fingers under the right elbow.
    a.push(["mixamorigLeftArm", "rotation", "x", -0.28, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -1.46, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -0.83, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.46, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0.55, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -0.37, "-"]);

    // Right forearm lies across the body above it, palm toward the body,
    // elbow on the left hand.
    a.push(["mixamorigRightArm", "rotation", "x", -0.63, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 1.28, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.98, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.2, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.34, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.22, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.24, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/9, "+"]);
    ref.animations.push(a);

    // The sun rises: the forearm swings up about the upper-arm axis while the
    // elbow stays on the left hand.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.75, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 1.19, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.16, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -1.03, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.8, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.63, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.16, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.15, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", 0, "-"]);
    ref.animations.push(a);

    // Reset: the right arm drops back to rest while the left forearm first
    // swings forward off the body, then settles (keeps it clear of the torso).
    a = [];
    a.push(["mixamorigLeftArm", "rotation", "y", -0.7, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.2, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    ref.animations.push(a);
    finish(ref);
};
