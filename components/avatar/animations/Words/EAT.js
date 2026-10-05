/**
 * Indian Sign Language (ISL) Sign Animation: EAT / EATING / FOOD
 *
 * ISL EAT/FOOD ("khana") mimes putting food into the mouth by hand:
 * - Handshape: right bunched hand - all fingertips gathered onto the thumb
 *   tip (flat-O / "morsel" hand).
 * - Location: mouth; the bunched fingertips touch the lips.
 * - Orientation: palm turned back toward the signer (and to the left),
 *   fingertips pointing at the mouth.
 * - Movement: the hand is raised in front of the mouth and the fingertips
 *   tap the lips twice with a small back-and-forth, then return to rest.
 */
export const EAT = (ref) => {
    // Stage 1: bunch all fingertips onto the thumb tip (a morsel of food held
    // in the fingers), palm turned back toward the signer, and raise the hand
    // in front of the mouth from the right.
    let animations = [];
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0.714, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0.862, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0.412, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0.555, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 1.031, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0.509, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0.611, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0.861, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0.527, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 1.066, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0.28, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0.059, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0.811, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", -0.08, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -0.405, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "z", 0.148, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "z", 0.153, "+"]);
    animations.push(["mixamorigRightHandIndex1", "rotation", "x", 0.17, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "x", -0.11, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "x", -0.2, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "y", 0.15, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -0.506, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0.332, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0.974, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 1.962, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -1.227, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -0.45, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0.095, "+"]);
    ref.animations.push(animations);

    // Stage 2: bring the bunched fingertips to the lips (tap 1).
    animations = [];
    animations.push(["mixamorigRightArm", "rotation", "x", -0.469, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0.369, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 1.029, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 2.284, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -1.248, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -0.381, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", -0.221, "-"]);
    ref.animations.push(animations);

    // Stage 3: pull back slightly.
    animations = [];
    animations.push(["mixamorigRightArm", "rotation", "x", -0.49, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0.325, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0.996, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 2.108, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -1.253, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -0.427, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", -0.035, "+"]);
    ref.animations.push(animations);

    // Stage 4: fingertips to the lips again (tap 2).
    animations = [];
    animations.push(["mixamorigRightArm", "rotation", "x", -0.469, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0.369, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 1.029, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 2.284, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -1.248, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -0.381, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", -0.221, "-"]);
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
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

export const EATING = EAT;
export const ATE = EAT;
export const FOOD = EAT;
