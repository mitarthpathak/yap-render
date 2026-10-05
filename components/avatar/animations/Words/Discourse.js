/**
 * Indian Sign Language (ISL) Animations: Discourse & Communication
 * - ANSWER, TELL, SHOW, LOOK, SEE, LISTEN, TALK, START, FINISH, AGAIN
 */

const finish = (ref) => {
    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

/**
 * ANSWER - Right index finger starts at lips/chin, then moves forward towards listener
 */
export const ANSWER = (ref) => {
    let a = [];
    // Stage 1: Right index at lips
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.3, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);
    ref.animations.push(a);

    // Stage 2: Move index finger forward pointing towards listener
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * TELL - Right index finger touches chin and arcs forward
 */
export const TELL = (ref) => {
    let a = [];
    // Stage 1: Right index touches chin
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.3, "+"]);
    ref.animations.push(a);

    // Stage 2: Arc forward
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * SHOW (ISL) - two hands. The non-dominant (left) flat hand stands upright in
 * front of the chest, fingers up, palm facing right; the tip of the right
 * index finger (index hand: other fingers closed, thumb across) is placed on
 * the left palm. Both hands then move forward together toward the person being
 * shown, as if presenting something held on the palm.
 */
export const SHOW = (ref) => {
    let a = [];
    // Left flat hand upright in front of the chest, palm facing right; the
    // right index fingertip is placed on the left palm.
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.314, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.827, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.184, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0.07, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.693, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.022, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0.243, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -0.056, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.876, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.169, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.458, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.1, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.067, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.642, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.189, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.728, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.057, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.993, "+"]);
    ref.animations.push(a);

    a = [];
    // Both hands move forward together toward the person (presenting).
    a.push(["mixamorigLeftArm", "rotation", "x", -0.798, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.697, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.295, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", -0.06, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.198, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -0.245, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -0.044, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -0.152, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.497, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.536, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.351, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.128, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.307, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.422, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.455, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.409, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.032, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.72, "-"]);
    ref.animations.push(a);

    a = [];
    // Return to the default pose.
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * LOOK (ISL) - one hand. Index handshape (index extended, other fingers closed,
 * thumb across). The index fingertip starts beside the right eye, then the hand
 * travels forward, out from the eye, until the index points straight ahead at
 * eye level - looking in that direction. (SEE uses the V hand held before the
 * eyes instead, so the two signs stay distinct.)
 */
export const LOOK = (ref) => {
    let a = [];
    // Index hand (index extended, other fingers closed, thumb across): the
    // index fingertip comes up beside the right eye.
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.091, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.768, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.369, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.282, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.155, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.07, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.241, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.113, "+"]);
    ref.animations.push(a);

    a = [];
    // The index travels out from the eye and points straight forward, at
    // eye level, in the direction of the gaze.
    a.push(["mixamorigRightArm", "rotation", "x", -0.655, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.593, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.124, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.121, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.771, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.014, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.275, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.449, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.279, "-"]);
    ref.animations.push(a);

    a = [];
    // Return to the default pose.
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * SEE (ISL) - one hand. 'V' handshape (index and middle fingers extended and
 * spread, ring and pinky closed under the thumb), fingers pointing up and palm
 * facing the signer, held just in front of the right eye; the V then moves
 * straight forward, away from the eyes along the line of sight.
 */
export const SEE = (ref) => {
    let a = [];
    // 'V' hand (index + middle spread, thumb holds ring/pinky) rises in front
    // of the face, fingers up, palm facing the signer...
    a.push(["mixamorigRightHandIndex1", "rotation", "y", 0.2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "y", -0.12, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.413, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.857, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.298, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.073, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.793, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.306, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.24, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.302, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.451, "+"]);
    ref.animations.push(a);

    a = [];
    // ...and comes in to just in front of the right eye (fingertips at eye height).
    a.push(["mixamorigRightArm", "rotation", "x", -0.518, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.721, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.339, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.071, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.42, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.111, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.402, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.389, "-"]);
    ref.animations.push(a);

    a = [];
    // The V moves straight forward, away from the eyes (line of sight).
    a.push(["mixamorigRightArm", "rotation", "x", -0.591, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.599, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.295, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.708, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.452, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.108, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.284, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.339, "-"]);
    ref.animations.push(a);

    a = [];
    // Return to the default pose.
    a.push(["mixamorigRightHandIndex1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * LISTEN (ISL) - one hand. Cupped hand (fingers together and curved, thumb
 * slightly out) raised behind the right ear with the palm facing forward, as if
 * catching sound; the head tilts slightly toward it and the cup closes forward
 * once around the ear before the hand returns to rest.
 */
export const LISTEN = (ref) => {
    let a = [];
    // Cupped hand (fingers together and curved, thumb out) raised behind the
    // right ear, palm facing forward; the head tilts slightly toward it.
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0.36, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 0.36, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0.36, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 0.36, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.3, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -1.116, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -0.282, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.796, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.059, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.08, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.904, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.169, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.151, "-"]);
    a.push(["mixamorigNeck", "rotation", "z", 0.12, "+"]);
    ref.animations.push(a);

    a = [];
    // The cup closes a little forward around the ear (catching the sound)...
    a.push(["mixamorigRightHand", "rotation", "z", 0.15, "+"]);
    ref.animations.push(a);

    a = [];
    // ...and opens again (held listening).
    a.push(["mixamorigRightHand", "rotation", "z", -0.151, "-"]);
    ref.animations.push(a);

    a = [];
    // Return to the default pose.
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * TALK (ISL) - two-handed, symmetric, alternating.
 * Handshape: both hands index hand (index finger straight and pointing up,
 * other fingers closed, thumb across them).
 * Location: in front of the lips, one hand on each side of the mouth.
 * Orientation: index fingers up, palms facing each other / toward the face.
 * Movement: the two hands move alternately forward and back from the mouth in
 * small repeated strokes, like two people talking to each other.
 */
export const TALK = (ref) => {
    let a = [];
    // Both hands in the index handshape (index up, other fingers closed, thumb
    // across), index fingers held up in front of the lips, one each side.
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
    a.push(["mixamorigRightArm", "rotation", "x", -0.558, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 1.018, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.397, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.359, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.562, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.166, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.133, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 1.028, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.075, "-"]);
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
    a.push(["mixamorigLeftArm", "rotation", "x", -0.558, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -1.018, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.397, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", -0.359, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.562, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.166, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -0.133, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -1.028, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.075, "+"]);
    ref.animations.push(a);

    a = [];
    // Alternating movement 1: right index forward from the lips, left back.
    a.push(["mixamorigRightArm", "rotation", "x", -0.586, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 1.046, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.381, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.392, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.450, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.164, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.168, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 1.040, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.077, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.549, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -1.042, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.365, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", -0.366, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.583, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.159, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -0.117, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -1.123, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.068, "-"]);
    ref.animations.push(a);

    a = [];
    // Alternating movement 1: left index forward from the lips, right back.
    a.push(["mixamorigRightArm", "rotation", "x", -0.549, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 1.042, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.365, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.366, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.583, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.159, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.117, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 1.123, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.068, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.586, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -1.046, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.381, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", -0.392, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.450, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.164, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -0.168, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -1.040, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.077, "+"]);
    ref.animations.push(a);

    a = [];
    // Alternating movement 2: right index forward from the lips, left back.
    a.push(["mixamorigRightArm", "rotation", "x", -0.586, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 1.046, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.381, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.392, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.450, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.164, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.168, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 1.040, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.077, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.549, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -1.042, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.365, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", -0.366, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.583, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.159, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -0.117, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -1.123, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.068, "-"]);
    ref.animations.push(a);

    a = [];
    // Alternating movement 2: left index forward from the lips, right back.
    a.push(["mixamorigRightArm", "rotation", "x", -0.549, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 1.042, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.365, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.366, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.583, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.159, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.117, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 1.123, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.068, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.586, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -1.046, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.381, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", -0.392, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.450, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.164, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -0.168, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -1.040, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.077, "+"]);
    ref.animations.push(a);

    a = [];
    // Hands part outward to the sides (so they do not cross on the way down).
    a.push(["mixamorigRightArm", "rotation", "x", -0.450, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.450, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.250, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.200, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.600, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.100, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.500, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.450, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.450, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.250, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", -0.200, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.600, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.100, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -0.500, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    a = [];
    // Return to the default pose.
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
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
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
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * START (ISL; same sign as BEGIN in the ISL HamNoSys corpus) - two-handed.
 * Handshape: left (base) flat hand, fingers slightly cupped; right hand
 * bunched (all fingertips closed together on the thumb) opening to a spread
 * hand.
 * Location: in front of the lower chest/stomach; the right hand starts just
 * above the left palm.
 * Orientation: left palm up, fingers forward-right; right fingertips up, palm
 * facing left.
 * Movement: the right hand rises from the left palm and opens its fingers
 * ("sprouting" - something begins).
 */
export const START = (ref) => {
    let a = [];
    // Left flat hand, fingers slightly cupped, palm up, fingers pointing forward
    // and to the right, in front of the lower chest. Right hand bunched (all
    // fingertips closed together on the thumb), fingertips up, palm facing
    // left, held just above the left palm.
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", -0.250, "-"]);
    a.push(["mixamorigLeftHandIndex2", "rotation", "z", -0.200, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", -0.250, "-"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", -0.200, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", -0.250, "-"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", -0.200, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", -0.250, "-"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", -0.200, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.161, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.481, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.431, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", -0.014, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.638, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.020, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -1.791, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0.061, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.220, "+"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0.441, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 1.200, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0.540, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 1.200, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0.390, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 1.192, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0.807, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0.304, "+"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "y", -0.400, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "y", 0.400, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "y", 0.400, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.948, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.230, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.771, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 1.177, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.600, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.076, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.400, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.233, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.090, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.688, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.514, "-"]);
    ref.animations.push(a);

    a = [];
    // The right hand rises straight up from the left palm and opens into a
    // spread hand (fingers up and fanned), like something sprouting.
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "y", 0.350, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "y", 0.050, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "y", -0.250, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "y", -0.500, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.500, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.900, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.994, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.445, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.004, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.489, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.083, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.507, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.437, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.619, "-"]);
    ref.animations.push(a);

    a = [];
    // Return to the default pose.
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * FINISH (ISL) - two-handed, symmetric.
 * Handshape: both flat hands (fingers straight and together, thumb out).
 * Location: close in front of the stomach / lower chest, one hand each side.
 * Orientation: palms up, fingers pointing forward.
 * Movement: both hands turn over to palms down (forearms rotate) while
 * moving slightly apart - "done, it is over".
 */
export const FINISH = (ref) => {
    let a = [];
    // Both flat hands (fingers together, thumb out), palms up, fingers pointing
    // forward, held close in front of the stomach.
    a.push(["mixamorigRightArm", "rotation", "x", -0.053, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.389, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.279, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.059, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.684, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.598, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.053, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.389, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.279, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", -0.059, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.684, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -1.598, "-"]);
    ref.animations.push(a);

    a = [];
    // Both hands turn over to palms down while moving slightly apart.
    a.push(["mixamorigRightArm", "rotation", "x", -0.100, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.335, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.084, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.030, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.609, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 1.291, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.100, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.335, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.084, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", -0.030, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.609, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 1.291, "+"]);
    ref.animations.push(a);

    a = [];
    // Return to the default pose.
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * AGAIN (ISL) - one-handed (HamNoSys AGAIN of an ISL text-to-sign corpus).
 * Handshape: index hand (index straight, others closed) changing to a bent
 * hand (index/middle bent toward an open thumb, ring/little finger hooked).
 * Location: starts at the right side of the chest, ends in front of the
 * chest.
 * Orientation: index pointing out to the right with the palm up, ending
 * with the fingers up and the palm facing left.
 * Movement: one large upward arc from the right side toward the centre,
 * the hand turning over as it goes ("once more / over again").
 */
export const AGAIN = (ref) => {
    let a = [];
    // Index hand (index straight, other fingers closed, thumb across) at the
    // right side of the chest, index pointing out to the right, palm up.
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
    a.push(["mixamorigRightArm", "rotation", "x", -0.263, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.163, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.528, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.190, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.823, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.026, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.059, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.705, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.672, "-"]);
    ref.animations.push(a);

    a = [];
    // Large upward arc toward the centre: the hand rises and turns, the index
    // swinging up.
    a.push(["mixamorigRightArm", "rotation", "x", -0.561, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.407, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.520, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.225, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.785, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.009, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.211, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.525, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.757, "-"]);
    ref.animations.push(a);

    a = [];
    // End of the arc in front of the chest: fingers up, palm facing left; the
    // hand changes to a bent hand (index/middle bent toward the thumb, ring and
    // little finger hooked).
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0.200, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 1.200, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0.800, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0.200, "-"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 1.200, "-"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 0.800, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0.600, "-"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 1.400, "-"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 0.900, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0.600, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 1.400, "-"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0.900, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.500, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.300, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.489, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.704, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.265, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.014, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.663, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.032, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.135, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.659, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.681, "+"]);
    ref.animations.push(a);

    a = [];
    // Return to the default pose.
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
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};
