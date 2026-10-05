/**
 * Indian Sign Language (ISL) Sign Animation: DRINK / DRINKING
 *
 * ISL DRINK is a mimetic "drink from a glass" sign:
 * - Handshape: right C-hand (all four fingers curved, thumb opposed with a
 *   gap), as if holding a glass/tumbler.
 * - Location: in front of the mouth; the thumb side comes to the lower lip.
 * - Orientation: palm facing left (toward the mouth's centre line).
 * - Movement: the hand is raised to just in front of the mouth, moves in to
 *   the lips while tipping the glass toward the mouth (fingers rotate up,
 *   head tilts back a little), eases back and tips again (two sips), then
 *   returns to rest.
 * Distinct from WATER (thumb-extended fist pointing into the mouth).
 */
export const DRINK = (ref) => {
    // Stage 1: curved C-hand (fingers bent, thumb opposed with a gap, as if
    // holding a glass), palm facing left, raised to just in front of the mouth.
    let animations = [];
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0.35, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0.65, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0.4, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0.35, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0.65, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0.4, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0.35, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0.65, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0.4, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0.35, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0.65, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0.4, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -0.116, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0.691, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0.775, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 2.078, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -0.323, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0.107, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", -0.7, "-"]);
    ref.animations.push(animations);

    // Stage 2: tip the glass to the lips - thumb side at the lower lip, the
    // hand rotates so the fingers point up (bottom of the glass lifts) and the
    // head tilts back slightly.
    animations = [];
    animations.push(["mixamorigRightArm", "rotation", "x", -0.296, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 1.018, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 2.025, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -0.024, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0.336, "+"]);
    animations.push(["mixamorigNeck", "rotation", "x", 0.17, "-"]);
    ref.animations.push(animations);

    // Stage 3: lower the glass a little (upright again).
    animations = [];
    animations.push(["mixamorigRightArm", "rotation", "x", -0.116, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0.775, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 2.078, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -0.323, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0.107, "-"]);
    animations.push(["mixamorigNeck", "rotation", "x", Math.PI / 12, "+"]);
    ref.animations.push(animations);

    // Stage 4: second sip - tip to the lips again.
    animations = [];
    animations.push(["mixamorigRightArm", "rotation", "x", -0.296, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 1.018, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 2.025, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -0.024, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0.336, "+"]);
    animations.push(["mixamorigNeck", "rotation", "x", 0.17, "-"]);
    ref.animations.push(animations);

    // Stage 5: return every touched axis to the default resting pose.
    animations = [];
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigNeck", "rotation", "x", Math.PI / 12, "+"]);
    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

export const DRINKING = DRINK;
export const DRANK = DRINK;
export const DRINKS = DRINK;
