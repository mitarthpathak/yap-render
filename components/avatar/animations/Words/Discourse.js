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
 * LOOK - Right 'V' hand shape near eyes pointing forward
 */
export const LOOK = (ref) => {
    let a = [];
    // Stage 1: Right 'V' hand near eye
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.2, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);
    ref.animations.push(a);

    // Stage 2: Direct eyes/fingers forward
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * SEE - Right 'V' hand (index + middle up) held just in front of the right eye,
 * then a small push forward along the line of sight.
 *
 * The stage-1 arm angles were solved numerically against the live rig: with
 * these deltas the right index fingertip sits at world y ~0.84 (head bone is
 * y 0.74, so this is eyebrow / eye height), x -0.21, z 0.22 - a V hand just in
 * front of the right eye. Every earlier hand-tuned attempt left it near the hip
 * because RightForeArm.x positive folds the forearm DOWN, not up.
 */
export const SEE = (ref) => {
    let a = [];
    // Stage 1: V hand rises to the right eye.
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.15, "-"]);  // strong forward+up flexion
    a.push(["mixamorigRightArm", "rotation", "y", -Math.PI/1.7, "-"]);   // rotate the whole arm in to the face
    a.push(["mixamorigRightArm", "rotation", "z", 0, "-"]);             // from the PI/3 rest down toward level
    a.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/8, "-"]); // NEGATIVE - forearm points up, not down
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/1.3, "+"]); // roll the forearm across to the eye
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);    // wrist: V fingers tilt up toward the eye
    ref.animations.push(a);

    // Stage 2: small forward "look" - the shoulder flexion eases a touch so the
    // hand travels forward off the eye, not down.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/1.7, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
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
