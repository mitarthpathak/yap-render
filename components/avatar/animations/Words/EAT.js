/**
 * Indian Sign Language (ISL) Sign Animation: EAT / EATING / FOOD
 * 
 * Accurately calibrated to avoid any mesh clipping with chest/stomach:
 * 1. Pinch right fingertips towards thumb (morsel grasp).
 * 2. Lift arm & forearm cleanly in front of the mouth.
 * 3. Tap twice towards the mouth.
 * 4. Restore all bones smoothly to the default resting pose.
 */
export const EAT = (ref) => {
    let animations = [];

    // Stage 1: Form pinched hand shape and raise in front of mouth
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/3.5, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/3.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/3.5, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/3.5, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", -Math.PI/12, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.2, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/8, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);

    // Left arm resting
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    ref.animations.push(animations);

    // Stage 2: Tap mouth (tap 1)
    animations = [];
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/1.9, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/4, "-"]);

    ref.animations.push(animations);

    // Stage 3: Pull slightly back
    animations = [];
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.3, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/8, "+"]);

    ref.animations.push(animations);

    // Stage 4: Tap mouth (tap 2)
    animations = [];
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/1.9, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/4, "-"]);

    ref.animations.push(animations);

    // Stage 5: Complete reset to resting pose
    animations = [];
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);

    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);

    // Left arm reset
    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

export const EATING = EAT;
export const ATE = EAT;
export const FOOD = EAT;
