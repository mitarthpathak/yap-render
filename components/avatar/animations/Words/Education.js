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
 * SCHOOL (ISL) - both flat hands clap together twice, palms meeting like
 * hands joined in prayer / namaste (the school-prayer clap).
 * - Handshape: both hands flat ("B"), fingers together and straight, thumbs
 *   held in against the side of the index finger.
 * - Location / orientation: in front of the chest, palms facing each other,
 *   fingers pointing up and slightly forward, forearms angled up toward the
 *   midline with the elbows relaxed at the sides.
 * - Movement: the hands start ~15 cm apart, close until the palms (thumb
 *   pads and fingers) meet, open again and meet a second time, then return
 *   to rest. Two crisp contacts distinguish it from a held namaste.
 */
export const SCHOOL = (ref) => {
    // Track the current delta of every axis used so each instruction gets the
    // correct '+'/'-' direction (a wrong flag silently drops the instruction).
    const cur = {
        "RightArm.z": Math.PI/3, "RightForeArm.y": Math.PI/1.5,
        "LeftArm.z": -Math.PI/3, "LeftForeArm.y": -Math.PI/1.5,
    };
    const key = (targets) => {
        const a = [];
        for (const [k, v] of Object.entries(targets)) {
            const from = cur[k] ?? 0;
            if (Math.abs(v - from) < 1e-6) continue;
            const [bone, axis] = k.split(".");
            a.push(["mixamorig" + bone, "rotation", axis, v, v > from ? "+" : "-"]);
            cur[k] = v;
        }
        ref.animations.push(a);
    };
    // Both arms mirror each other: right-side values, left = y/z negated.
    const both = (arm, foreY, hand) => ({
        "RightArm.x": arm[0], "RightArm.y": arm[1], "RightArm.z": arm[2], "RightForeArm.y": foreY,
        "RightHand.x": hand[0], "RightHand.y": hand[1], "RightHand.z": hand[2],
        "LeftArm.x": arm[0], "LeftArm.y": -arm[1], "LeftArm.z": -arm[2], "LeftForeArm.y": -foreY,
        "LeftHand.x": hand[0], "LeftHand.y": -hand[1], "LeftHand.z": -hand[2],
    });
    const OPEN = both([-0.39, 0.886, 1.08], 1.31, [0.345, 0.775, -1.14]);   // palms ~15 cm apart
    const CLAP = both([-0.30, 1.088, 0.913], 1.356, [0.135, 0.584, -1.153]); // palms meet

    // 1. Raise both flat hands in front of the chest, palms facing, thumbs in.
    key({ ...OPEN, "RightHandThumb1.z": -0.75, "LeftHandThumb1.z": 0.75 });
    // 2. Clap 1.
    key(CLAP);
    // 3. Open.
    key(OPEN);
    // 4. Clap 2.
    key(CLAP);
    // 5. Back to the rest pose.
    key({
        ...both([0, 0, Math.PI/3], Math.PI/1.5, [0, 0, 0]),
        "RightHandThumb1.z": 0, "LeftHandThumb1.z": 0,
    });

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
 * TEACHER (ISL) - compound TEACH + PERSON.
 * TEACH: both hands in a flat 'O' (fingertips bunched on the thumb) at the
 * sides of the forehead, fingertips toward the head; both move forward and
 * out from the head (knowledge given out).
 * PERSON: the right hand in an 'I' (little finger up, other fingers closed,
 * thumb across them), palm facing left, in front of the chest, moves straight
 * down; the left hand returns to rest.
 * (Distinct from STUDENT = LEARN + PERSON: one hand from the palm to the head.)
 */
export const TEACHER = (ref) => {
    let a = [];
    // TEACH: both flat-O hands at the sides of the forehead, fingertips toward the head
    a.push(["mixamorigRightArm", "rotation", "x", -0.858, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.313, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.368, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.222, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.3, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.237, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.265, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.127, "+"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 1, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0.35, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0.2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 1, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 0.35, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 0.2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 1.05, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0.35, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 0.2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 1.1, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0.35, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0.2, "+"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "y", -0.1, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "y", 0.08, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "y", 0.3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "y", 0.5, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.467, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.328, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0.105, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.072, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "z", 0.04, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.858, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.313, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.368, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -2.222, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0.3, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -0.237, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0.265, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -0.127, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", -1, "-"]);
    a.push(["mixamorigLeftHandIndex2", "rotation", "z", -0.35, "-"]);
    a.push(["mixamorigLeftHandIndex3", "rotation", "z", -0.2, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", -1, "-"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", -0.35, "-"]);
    a.push(["mixamorigLeftHandMiddle3", "rotation", "z", -0.2, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", -1.05, "-"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", -0.35, "-"]);
    a.push(["mixamorigLeftHandRing3", "rotation", "z", -0.2, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", -1.1, "-"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", -0.35, "-"]);
    a.push(["mixamorigLeftHandPinky3", "rotation", "z", -0.2, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "y", 0.1, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "y", -0.08, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "y", -0.3, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "y", -0.5, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", 0.467, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "y", 0.328, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "z", -0.105, "-"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "y", 0.072, "+"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "z", -0.04, "-"]);
    ref.animations.push(a);

    // TEACH: both hands move forward and out from the head (giving out knowledge)
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -1.176, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", -0.14, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.216, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.033, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.675, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.212, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0.223, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.472, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.432, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -1.176, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0.14, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.216, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0.033, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.675, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -0.212, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0.223, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0.472, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -0.432, "-"]);
    ref.animations.push(a);

    // PERSON: right 'I' hand (little finger up) in front of the chest; left hand returns to rest
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 1.047, "+"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 1.047, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 1.047, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.495, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0.005, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.1, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.9, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", -0.9, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.191, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.439, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.127, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.062, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.898, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.013, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.8, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.7, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.027, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "z", 0, "+"]);
    ref.animations.push(a);

    // PERSON: the 'I' hand moves straight down, little finger kept pointing up
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.45, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 1.1, "+"]);
    ref.animations.push(a);

    // Return to the default rest pose
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
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * STUDENT (ISL) - compound LEARN + PERSON.
 * LEARN: the left hand is flat, palm up, in front of the body; the right open
 * hand touches the left palm with its fingertips, closes into a flat 'O' as if
 * picking something up, and carries it up until the fingertips touch the
 * forehead.
 * PERSON: the right hand in an 'I' (little finger up, other fingers closed,
 * thumb across them), palm facing left, in front of the chest, moves straight
 * down; the left hand returns to rest.
 * (Distinct from TEACHER = TEACH + PERSON: both hands from the head outward.)
 */
export const STUDENT = (ref) => {
    let a = [];
    // LEARN: left flat palm up in front of the body; right open hand, fingers down, touches the left palm
    a.push(["mixamorigLeftArm", "rotation", "x", -0.178, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.498, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.309, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0.035, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.617, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -1.891, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -0.077, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.206, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.571, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.533, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 0.849, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.048, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.068, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.323, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.294, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", -0.8, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.6, "+"]);
    ref.animations.push(a);

    // LEARN: right fingers close to a flat 'O', picking up from the left palm
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 1, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 0.35, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 0.2, "+"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "y", -0.1, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 1, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 0.35, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 0.2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "y", 0.08, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 1.05, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 0.35, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 0.2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "y", 0.3, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 1.1, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0.35, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0.2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "y", 0.5, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.467, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", -0.328, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0.105, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.072, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "z", 0.04, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.658, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.8, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.022, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.074, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.594, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.208, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.09, "+"]);
    ref.animations.push(a);

    // LEARN: the flat 'O' rises and its fingertips touch the forehead
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.823, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.243, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.042, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 2.042, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", -0.161, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.208, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.288, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.6, "-"]);
    ref.animations.push(a);

    // PERSON: right 'I' hand (little finger up) in front of the chest; left hand returns to rest
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandIndex2", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandIndex3", "rotation", "z", 1.047, "+"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandMiddle2", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandMiddle3", "rotation", "z", 1.047, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandRing2", "rotation", "z", 1.571, "+"]);
    a.push(["mixamorigRightHandRing3", "rotation", "z", 1.047, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.495, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0.005, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.1, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -0.9, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", -0.9, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -0.191, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.439, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.127, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", -0.062, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.898, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.013, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.8, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.7, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0.027, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    // PERSON: the 'I' hand moves straight down, little finger kept pointing up
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.45, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 1.1, "+"]);
    ref.animations.push(a);

    // Return to the default rest pose
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
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * BOOK (ISL) - two-handed, symmetric.
 * Handshape: both hands flat 'B' (fingers together, thumbs tucked alongside).
 * Location / orientation: in front of the lower chest, fingers pointing forward,
 * palms pressed together (right palm facing left, left palm facing right) -
 * the closed book.
 * Movement: the hands hinge open at their little-finger edges, which stay
 * together, until both palms face up like the pages of an open book; then
 * the hands return to rest.
 */
export const BOOK = (ref) => {
    let a = [];
    // Both flat hands (thumbs tucked) palm to palm in front of the chest, fingers forward: the closed book
    a.push(["mixamorigRightArm", "rotation", "x", -0.447, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.434, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.207, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.272, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.511, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.208, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -0.499, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.08, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.6, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0.265, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0.389, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", -0.415, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -1.15, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "z", -0.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.447, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.434, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.207, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0.272, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.511, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -0.208, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -0.499, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -0.08, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.6, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", 0.265, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "y", -0.389, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "z", 0.415, "+"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "y", 1.15, "+"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "z", 0.5, "+"]);
    ref.animations.push(a);

    // Hinge open at the little-finger edges: palms turn up, like the two covers of an open book
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -0.505, "-"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0.42, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", 1.16, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0.363, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", 1.586, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0.21, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -1.841, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0.8, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -0.541, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -0.505, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "y", -0.42, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -1.16, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0.363, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -1.586, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", -0.21, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -1.841, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -0.8, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0.541, "-"]);
    ref.animations.push(a);

    // Return to the default rest pose
    a = [];
    a.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftHandThumb1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);
    a.push(["mixamorigLeftHandThumb2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "+"]);
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
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
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
