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
 * SHOW - Left flat palm faces forward in front of the chest, the right index
 * finger meets it, then both hands push forward toward the person. Solved
 * numerically:
 *   stage 1  L hand y 0.59 x -0.01 z 0.20 | R hand y 0.55 x 0.01 z 0.16 (together)
 *   stage 2  both push to z ~0.34  (presented toward the person)
 */
export const SHOW = (ref) => {
    let a = [];
    // Stage 1: left flat palm forward; right index-point hand meets it.
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/1.6, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", Math.PI/1.9, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/8, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/1.6, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.8, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/1.9, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/8, "-"]);
    ref.animations.push(a);

    // Stage 2: both hands push forward together toward the person.
    a = [];
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/1.35, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/2.5, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.35, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/2.5, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
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
 * LISTEN - Right hand cupped behind right ear, head tilted slightly to right
 */
export const LISTEN = (ref) => {
    let a = [];
    // Stage 1: Right hand cupped behind right ear
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/4, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.1, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -Math.PI/6, "-"]);
    a.push(["mixamorigNeck", "rotation", "z", -Math.PI/10, "-"]);
    ref.animations.push(a);

    // Stage 2: Hold listening pose
    a = [];
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/10, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "z", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * TALK - Right index finger in front of lips pulsing back and forth twice
 */
export const TALK = (ref) => {
    let a = [];
    // Stage 1: Right index finger in front of mouth
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.3, "+"]);
    ref.animations.push(a);

    // Pulse 1
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.6, "-"]);
    ref.animations.push(a);

    // Return 1
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.3, "+"]);
    ref.animations.push(a);

    // Pulse 2
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.6, "-"]);
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
 * START - Right index twists between left fingers (turning ignition key)
 */
export const START = (ref) => {
    let a = [];
    // Stage 1: Left hand horizontal, right index placed between fingers
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    ref.animations.push(a);

    // Stage 2: Twist key motion
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/2.5, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * FINISH - Both hands palms up flick outward and rotate palms down
 */
export const FINISH = (ref) => {
    let a = [];
    // Stage 1: Both hands in front, palms up
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);
    ref.animations.push(a);

    // Stage 2: Quick flick outward turning palms down
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", Math.PI/4, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/4, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * AGAIN - Left hand flat palm up, right curved hand sweeps up and stamps into left palm twice
 */
export const AGAIN = (ref) => {
    let a = [];
    // Stage 1: Left palm flat facing up, right curved hand raised above
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/4, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    ref.animations.push(a);

    // Stamp 1
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Lift 1
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    ref.animations.push(a);

    // Stamp 2
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
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
    ref.animations.push(a);

    finish(ref);
};
