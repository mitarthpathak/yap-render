/**
 * Indian Sign Language (ISL) Animations: Education & Academics
 * - SCHOOL, CLASS, TEACHER, STUDENT, BOOK, READ, WRITE, STUDY, LEARN, EXAM
 */

const finish = (ref) => {
    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

/**
 * SCHOOL - Right open palm clapping down onto left flat palm twice
 */
export const SCHOOL = (ref) => {
    let a = [];
    // Stage 1: Left palm flat facing up, right hand open above it
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    ref.animations.push(a);

    // Clap 1
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Lift 1
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    ref.animations.push(a);

    // Clap 2
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
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

/**
 * CLASS (ISL) - two-handed, symmetric.
 * Handshape: both hands in a 'C' (fingers together and curved, thumb opposed).
 * Location / orientation: the hands start side by side in front of the chest,
 * palms facing each other.
 * Movement: the hands sweep apart and forward around a horizontal circle and
 * meet again in front, palms now turned toward the body - outlining a group
 * of people (the class); then they return to rest.
 */
export const CLASS = (ref) => {
    let a = [];
    // Both 'C' hands side by side in front of the chest, palms facing each other
    a.push(["mixamorigRightArm", "rotation", "x", -0.373, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.52, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.139, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.208, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.714, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.004, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.329, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.021, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.7, "-"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0.45, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0.4, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0.45, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 0.4, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0.45, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 0.4, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0.45, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0.4, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.097, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0.338, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0.308, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -1.022, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "z", -0.402, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.373, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.52, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.139, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0.208, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.714, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.004, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -0.329, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0.021, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.7, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", -0.45, "-"]);
    a.push(["mixamorigLeftHandIndex2", "rotation", "z", -0.6, "-"]);
    a.push(["mixamorigLeftHandIndex3", "rotation", "z", -0.4, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", -0.45, "-"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", -0.6, "-"]);
    a.push(["mixamorigLeftHandMiddle3", "rotation", "z", -0.4, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", -0.45, "-"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", -0.6, "-"]);
    a.push(["mixamorigLeftHandRing3", "rotation", "z", -0.4, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", -0.45, "-"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", -0.6, "-"]);
    a.push(["mixamorigLeftHandPinky3", "rotation", "z", -0.4, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", 0.097, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "y", -0.338, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "z", -0.308, "-"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "y", 1.022, "+"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "z", 0.402, "+"]);
    ref.animations.push(a);

    // Hands sweep apart and forward around the sides of a horizontal circle
    a = [];
    a.push(["mixamorigRightArm", "rotation", "y", 0.173, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.092, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.26, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.639, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.488, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.155, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.297, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.173, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.092, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0.26, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.639, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -0.488, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -0.155, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.297, "-"]);
    ref.animations.push(a);

    // Hands close the circle in front, palms turned toward the body (the group)
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.955, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.596, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.073, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.091, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 0.639, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.466, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.065, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.481, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.7, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.955, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.596, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.073, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0.091, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -0.639, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -0.466, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -1.065, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -0.481, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -0.7, "-"]);
    ref.animations.push(a);

    // Return to the default rest pose
    a = [];
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "z", 0, "-"]);
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
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * TEACHER - Hands near temples moving forward (teach), then person agent marker
 */
export const TEACHER = (ref) => {
    let a = [];
    // Stage 1: Hands near temples
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.3, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/2.3, "+"]);
    ref.animations.push(a);

    // Stage 2: Move hands forward (teach sign)
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Stage 3: Person marker (hands flat moving downward along torso)
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * STUDENT - Scoop knowledge from palm to forehead, followed by person marker
 */
export const STUDENT = (ref) => {
    let a = [];
    // Stage 1: Left palm flat, right hand scoops from it
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    ref.animations.push(a);

    // Stage 2: Right hand brings knowledge to forehead (learn)
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.1, "+"]);
    ref.animations.push(a);

    // Stage 3: Person marker
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
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

/**
 * BOOK - Both hands flat together at palms, then opening outward like a book
 */
export const BOOK = (ref) => {
    let a = [];
    // Stage 1: Both palms together in front of chest
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/8, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);
    ref.animations.push(a);

    // Stage 2: Open like book pages
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * READ - Left hand flat like open book, right 'V' scanning down left palm
 */
export const READ = (ref) => {
    let a = [];
    // Stage 1: Left palm flat, right 'V' eyes hovering at top of left palm
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    ref.animations.push(a);

    // Scan down
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Scan back up
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    ref.animations.push(a);

    // Scan down again
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "-"]);
    ref.animations.push(a);

    // Reset
    a = [];
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
    ref.animations.push(a);

    finish(ref);
};

/**
 * WRITE - Left hand flat, right pinched hand scribbles across left palm
 */
export const WRITE = (ref) => {
    let a = [];
    // Stage 1: Left palm flat horizontal, right pinched hand (pen) on it
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.2, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/8, "+"]);
    ref.animations.push(a);

    // Scribble stroke 1 (across)
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/5, "+"]);
    ref.animations.push(a);

    // Scribble stroke 2
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", -Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/8, "-"]);
    ref.animations.push(a);

    // Scribble stroke 3
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/5, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
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
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * STUDY - Left hand flat, right fingers fluttering over it and rising towards eyes
 */
export const STUDY = (ref) => {
    let a = [];
    // Stage 1: Left palm flat, right hand fingers over left palm
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(a);

    // Flutter 1 & rise towards eyes
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.3, "+"]);
    ref.animations.push(a);

    // Flutter 2
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/4, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);

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

/**
 * LEARN - Right hand grasps knowledge from left flat palm, brings to forehead
 */
export const LEARN = (ref) => {
    let a = [];
    // Stage 1: Left palm flat, right hand takes from left palm
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    ref.animations.push(a);

    // Stage 2: Grasp & lift up to forehead
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.1, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
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
    ref.animations.push(a);

    finish(ref);
};

/**
 * EXAM - Write gesture on left palm, followed by right index ticking/checking in air
 */
export const EXAM = (ref) => {
    let a = [];
    // Stage 1: Left palm flat, right hand writes
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.2, "+"]);
    ref.animations.push(a);

    // Stage 2: Right index extends to checkmark/tick in air
    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/4, "-"]);
    ref.animations.push(a);

    // Tick downward and up
    a = [];
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"]);
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
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};
