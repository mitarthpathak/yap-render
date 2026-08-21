/**
 * Indian Sign Language (ISL) Sign Animation: DRINK / DRINKING
 * 
 * Accurately calibrated to avoid any mesh clipping with chest/stomach:
 * 1. Form a natural C-cup shape with right hand.
 * 2. Lift right arm & forearm forward in front of the mouth.
 * 3. Tilt the cup to the mouth with slight head movement.
 * 4. Smoothly restore all bones to the resting default pose.
 */
export const DRINK = (ref) => {
    let animations = [];

    // Stage 1: Right hand forms C-cup shape and raises cleanly in front of mouth
    // Finger curls for cup shape
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/4, "+"]);

    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/5, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/5, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/5, "-"]);

    // Arm positioning: bring hand up and forward in front of face
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", -Math.PI/12, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.2, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/8, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/8, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);

    // Ensure left arm stays cleanly in resting pose
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    ref.animations.push(animations);

    // Stage 2: Tip cup to mouth (sip 1)
    animations = [];
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/3.5, "-"]);
    animations.push(["mixamorigNeck", "rotation", "x", -Math.PI/18, "-"]);

    ref.animations.push(animations);

    // Stage 3: Lower cup slightly
    animations = [];
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/8, "+"]);
    animations.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "+"]);

    ref.animations.push(animations);

    // Stage 4: Tip cup to mouth again (sip 2)
    animations = [];
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/3.5, "-"]);
    animations.push(["mixamorigNeck", "rotation", "x", -Math.PI/18, "-"]);

    ref.animations.push(animations);

    // Stage 5: Complete reset back to clean default resting pose
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
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "+"]);

    // Ensure left hand and fingers are fully reset too
    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);

    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

export const DRINKING = DRINK;
export const DRANK = DRINK;
export const DRINKS = DRINK;
