/**
 * Indian Sign Language (ISL) Animations: Daily Life, Health & Medical
 * - WATER, SLEEP, TOILET, DOCTOR, HOSPITAL, PAIN
 */

const finish = (ref) => {
    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

/**
 * WATER - A relaxed W-hand travels to the chin, makes two small natural
 * contacts, then returns through the same path. The previous version jumped
 * directly between large elbow rotations, which made the sign look robotic.
 */
export const WATER = (ref) => {
    let a = [];
    // Prepare the W-hand: first three fingers remain open while the little
    // finger and thumb fold in. The wrist is turned toward the face.
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI / 2, "+"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI / 3, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI / 4, "+"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI / 5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 3.4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI / 5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 3.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI / 2.45, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI / 10, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 10, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI / 6, "+"]);
    ref.animations.push(a);

    // Ease in to the chin rather than snapping into it.
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI / 2.9, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI / 2.08, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 5, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 9, "+"]);
    ref.animations.push(a);

    // A short release and second gentle contact read as a deliberate sign.
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI / 2.22, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 12, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI / 2.08, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI / 5, "-"]);
    ref.animations.push(a);

    // Return to the avatar's shared neutral pose.
    a = [];
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI / 3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI / 1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI / 12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * SLEEP - Right palm placed against tilted cheek/head
 */
export const SLEEP = (ref) => {
    let a = [];
    // Stage 1: Right hand flat against right cheek, head tilted
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.2, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.1, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", -Math.PI/6, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);
    a.push(["mixamorigNeck", "rotation", "z", -Math.PI/7, "-"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/8, "+"]);
    ref.animations.push(a);

    // Stage 2: Hold resting pose
    a = [];
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/7, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigNeck", "rotation", "z", 0, "+"]);
    a.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * TOILET - Right fist in front of chest shaking side-to-side twice
 */
export const TOILET = (ref) => {
    let a = [];
    // Stage 1: Right fist in front of chest
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(a);

    // Shake Left
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);
    ref.animations.push(a);

    // Shake Right
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", -Math.PI/4, "-"]);
    ref.animations.push(a);

    // Shake Left again
    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);
    ref.animations.push(a);

    // Reset
    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * DOCTOR - Left arm forward palm up, right index & middle fingers tapping left wrist pulse
 */
export const DOCTOR = (ref) => {
    let a = [];
    // Stage 1: Left arm forward wrist exposed, right fingers above wrist
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/3, "-"]); // Wrist palm up

    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    ref.animations.push(a);

    // Tap pulse 1
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.8, "-"]);
    ref.animations.push(a);

    // Lift slightly
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(a);

    // Tap pulse 2
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.8, "-"]);
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
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    ref.animations.push(a);

    finish(ref);
};

/**
 * HOSPITAL (ISL) - the "red cross" sign: the dominant index finger draws a
 * plus sign on the upper arm of the non-dominant arm.
 * - Left (non-dominant) arm: lifted slightly forward, elbow bent, forearm
 *   across the front of the body, so the upper arm is presented to the viewer.
 * - Right (dominant) hand: index-finger handshape (middle, ring, pinky curled,
 *   thumb folded over them), palm down, fingertip resting on the front/top of
 *   the left upper arm between shoulder and elbow.
 * - Movement: one stroke down the length of the upper arm (~5 cm), the finger
 *   lifts, then one stroke across the arm (~5 cm) through the middle of the
 *   first one - a "+" on the sleeve - then both arms return to rest.
 * Every key pose keeps the fingertip on the arm surface (contact <= 1 cm) and
 * the right forearm clear of the chest.
 */
export const HOSPITAL = (ref) => {
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

    // 1. Present the left upper arm (shoulder flexed forward, forearm pointing
    //    forward-down); the right hand forms the index handshape and the
    //    fingertip lands on the upper (shoulder) end of the vertical stroke.
    key({
        "LeftArm.x": -1.0, "LeftArm.z": -1.1, "LeftForeArm.y": -0.6, "LeftForeArm.x": 0.6,
        "RightHandMiddle1.z": Math.PI/2, "RightHandMiddle2.z": Math.PI/2, "RightHandMiddle3.z": Math.PI/2.5,
        "RightHandRing1.z": Math.PI/2, "RightHandRing2.z": Math.PI/2, "RightHandRing3.z": Math.PI/2.5,
        "RightHandPinky1.z": Math.PI/2, "RightHandPinky2.z": Math.PI/2, "RightHandPinky3.z": Math.PI/2.5,
        "RightHandThumb1.x": Math.PI/3, "RightHandThumb2.y": -Math.PI/3,
        "RightArm.x": -0.95, "RightArm.y": 1.27, "RightArm.z": 1.29, "RightForeArm.y": 1.73,
        "RightHand.x": 0.58, "RightHand.y": 0.58, "RightHand.z": 0.17,
    });
    // 2. Vertical stroke: slide ~6 cm down the upper arm toward the elbow.
    key({ "RightArm.x": -1.01, "RightArm.y": 1.30, "RightArm.z": 1.33, "RightForeArm.y": 1.71, "RightHand.x": 0.80, "RightHand.y": 0.49, "RightHand.z": 0.22 });
    // 3. Lift the fingertip (~3 cm) off the sleeve.
    key({ "RightArm.x": -1.05, "RightArm.y": 1.24, "RightArm.z": 1.30, "RightForeArm.y": 1.66, "RightHand.x": 0.70, "RightHand.y": 0.59, "RightHand.z": 0.26 });
    // 4. Touch down on the inner side of the arm, midway along the first line.
    key({ "RightArm.x": -0.96, "RightArm.y": 1.26, "RightArm.z": 1.27, "RightForeArm.y": 1.73, "RightHand.x": 0.69, "RightHand.y": 0.68, "RightHand.z": 0.30 });
    // 5. Horizontal stroke (~5 cm) across the arm, crossing the first line.
    key({ "RightArm.x": -1.13, "RightArm.y": 1.28, "RightArm.z": 1.50, "RightHand.x": 0.55, "RightHand.y": 0.38, "RightHand.z": 0.31 });
    // 6. Release: the right hand moves forward and away from the left arm
    //    (so it does not swing up past the chin) while the left arm lowers.
    key({
        "RightArm.x": -0.5, "RightArm.y": 0.5, "RightArm.z": 1.2, "RightForeArm.y": 1.5,
        "RightHand.x": 0, "RightHand.y": 0, "RightHand.z": 0,
        "LeftArm.x": 0, "LeftArm.z": -Math.PI/3, "LeftForeArm.y": -Math.PI/1.5, "LeftForeArm.x": 0,
    });
    // 7. Back to the rest pose.
    key({
        "RightHandMiddle1.z": 0, "RightHandMiddle2.z": 0, "RightHandMiddle3.z": 0,
        "RightHandRing1.z": 0, "RightHandRing2.z": 0, "RightHandRing3.z": 0,
        "RightHandPinky1.z": 0, "RightHandPinky2.z": 0, "RightHandPinky3.z": 0,
        "RightHandThumb1.x": 0, "RightHandThumb2.y": 0,
        "RightArm.x": 0, "RightArm.y": 0, "RightArm.z": Math.PI/3, "RightForeArm.y": Math.PI/1.5,
    });

    finish(ref);
};

/**
 * PAIN (ISL) - the two index fingers point at each other and twist.
 * - Handshape: both hands in the index ("1") handshape - index finger
 *   straight, middle, ring and little fingers curled into the palm, thumb
 *   folded over them.
 * - Location / orientation: in front of the chest, forearms angled in toward
 *   the midline with the elbows out, index fingers pointing at each other
 *   (and slightly forward) with the tips ~5 cm apart, palms facing down.
 * - Movement: both wrists twist (forearm roll) so the palms turn in toward
 *   the body while the fingertips stay pointing at each other, twist back,
 *   and twist again (two twists); the head bows slightly as a pained
 *   expression. Then both hands return to rest.
 */
export const PAIN = (ref) => {
    // Track the current delta of every axis used so each instruction gets the
    // correct '+'/'-' direction (a wrong flag silently drops the instruction).
    const cur = {
        "Neck.x": Math.PI/12,
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
    // Index handshape on both hands (left finger curl is negative z).
    const hands = (c) => {
        const t = {};
        for (const f of ["Middle", "Ring", "Pinky"]) {
            t[`RightHand${f}1.z`] = c * Math.PI/2; t[`RightHand${f}2.z`] = c * Math.PI/2; t[`RightHand${f}3.z`] = c * Math.PI/2.5;
            t[`LeftHand${f}1.z`] = -c * Math.PI/2; t[`LeftHand${f}2.z`] = -c * Math.PI/2; t[`LeftHand${f}3.z`] = -c * Math.PI/2.5;
        }
        t["RightHandThumb1.x"] = c * Math.PI/3; t["RightHandThumb2.y"] = -c * Math.PI/3;
        t["LeftHandThumb1.x"] = c * Math.PI/3; t["LeftHandThumb2.y"] = c * Math.PI/3;
        return t;
    };
    // Both arms mirror each other: right-side values, left = y/z negated.
    const both = (arm, foreY, hand) => ({
        "RightArm.x": arm[0], "RightArm.y": arm[1], "RightArm.z": arm[2], "RightForeArm.y": foreY,
        "RightHand.x": hand[0], "RightHand.y": hand[1], "RightHand.z": hand[2],
        "LeftArm.x": arm[0], "LeftArm.y": -arm[1], "LeftArm.z": -arm[2], "LeftForeArm.y": -foreY,
        "LeftHand.x": hand[0], "LeftHand.y": -hand[1], "LeftHand.z": -hand[2],
    });
    const ARM = [-0.17, 0.52, 0.68];
    const FLAT = both(ARM, 1.77, [0.3, 0, 0.2]);     // palms down, tips ~5 cm apart
    const TWIST = both(ARM, 1.77, [-0.8, 0, 0.2]);   // palms rolled in toward the body

    // 1. Both index hands come up in front of the chest, pointing at each other.
    key({ ...hands(1), ...FLAT });
    // 2. Twist 1 (with a slight wince of the head).
    key({ ...TWIST, "Neck.x": 0.38 });
    // 3. Twist back.
    key(FLAT);
    // 4. Twist 2.
    key(TWIST);
    // 5. Back to the rest pose.
    key({ ...hands(0), ...both([0, 0, Math.PI/3], Math.PI/1.5, [0, 0, 0]), "Neck.x": Math.PI/12 });

    finish(ref);
};
