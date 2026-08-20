/**
 * Indian Sign Language (ISL) Animations: People & Relations
 * - MAN, WOMAN, CHILD, BOY, GIRL, PARENT, FAMILY, FRIEND, NEIGHBOR, MOTHER, FATHER, BROTHER, SISTER, NAME, AGE
 */

const finish = (ref) => {
    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

export const MAN = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]); // Thumb to forehead
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const WOMAN = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]); // Thumb to chin
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const CHILD = (ref) => {
    let a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/6, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/4, "-"]); // Patting small head
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/6, "-"]);
    ref.animations.push(a);
    
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    ref.animations.push(a);
    finish(ref);
};

export const BOY = (ref) => {
    let a = []; // Cap peak sign + CHILD
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]); 
    ref.animations.push(a);

    a = []; 
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"]); // Squeeze cap
    ref.animations.push(a);
    
    a = []; // CHILD
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/6, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/4, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    ref.animations.push(a);
    finish(ref);
};

export const GIRL = (ref) => {
    let a = []; // Stroke cheek sign + CHILD
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);
    ref.animations.push(a);

    a = []; // Slide down cheek
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "-"]);
    ref.animations.push(a);
    
    a = []; // CHILD
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/6, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/4, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    ref.animations.push(a);
    finish(ref);
};

export const PARENT = (ref) => {
    let a = []; // FATHER + MOTHER (MAN + WOMAN basically or forehead to chin)
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]); // Forehead
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.8, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2, "-"]); // Chin
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const MOTHER = (ref) => {
    // Similar to WOMAN but tapping twice
    let a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]); // Chin
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.2, "-"]);
    ref.animations.push(a);
    
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const FATHER = (ref) => {
    // Similar to MAN but tapping twice
    let a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]); // Forehead
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/1.6, "-"]);
    ref.animations.push(a);
    
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/1.5, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const BROTHER = (ref) => {
    let a = []; // BOY + SAME (fingers together)
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]); // BOY
    ref.animations.push(a);
    
    a = []; // Bring hands together pointing forward
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const SISTER = (ref) => {
    let a = []; // GIRL + SAME
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]); // GIRL
    ref.animations.push(a);
    
    a = []; // Bring hands together pointing forward
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const FRIEND = (ref) => {
    let a = []; // Clasping hands
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/2, "+"]); // hook
    a.push(["mixamorigLeftHand", "rotation", "x", Math.PI/2, "+"]); // hook
    ref.animations.push(a);

    a = []; // Reverse hook
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/2, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    ref.animations.push(a);
    finish(ref);
};

export const FAMILY = (ref) => {
    let a = []; // 'F' handshapes forming a circle
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]); // F shape
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]); // F shape
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    ref.animations.push(a);

    a = []; // Circle out
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/4, "-"]);
    ref.animations.push(a);

    a = []; // Circle in
    a.push(["mixamorigRightArm", "rotation", "z", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", Math.PI/4, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const NEIGHBOR = (ref) => {
    let a = []; // NEAR + PERSON
    // NEAR
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/8, "+"]); // Pull right hand close
    a.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]); // Left hand steady
    ref.animations.push(a);

    a = []; // PERSON (straight down)
    a.push(["mixamorigRightForeArm", "rotation", "z", -Math.PI/8, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/6, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const NAME = (ref) => {
    let a = []; // 'H' handshapes tapping
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    ref.animations.push(a);

    a = []; // Tap
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    ref.animations.push(a);
    
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "-"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const AGE = (ref) => {
    let a = []; // Pulling down from chin
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]); // Chin
    ref.animations.push(a);

    a = []; // Pull down (like beard)
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "-"]);
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]); // Close fist
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};
