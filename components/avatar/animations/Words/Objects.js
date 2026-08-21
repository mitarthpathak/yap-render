/**
 * Indian Sign Language (ISL) Animations: Objects & Home
 * - HOUSE, ROOM, DOOR, WINDOW, CHAIR, TABLE, BAG, CLOTHES, KEY, MONEY
 */

const finish = (ref) => {
    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

export const HOUSE = (ref) => {
    let a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/4, "-"]);
    ref.animations.push(a);

    a = []; 
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/2, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);
    ref.animations.push(a);
    finish(ref);
};

export const ROOM = (ref) => {
    let a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(a);

    a = []; // Box shape front-back
    a.push(["mixamorigRightArm", "rotation", "z", -Math.PI/8, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", Math.PI/8, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", Math.PI/4, "+"]);
    ref.animations.push(a);
    
    a = []; // Box shape sides
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/4, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const DOOR = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/2, "-"]);
    ref.animations.push(a);

    a = []; // Swing right hand open
    a.push(["mixamorigRightForeArm", "rotation", "y", -Math.PI/4, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "-"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    ref.animations.push(a);
    finish(ref);
};

export const WINDOW = (ref) => {
    let a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", -Math.PI/4, "-"]); // Horizontal bar
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", Math.PI/4, "+"]); // Horizontal bar
    ref.animations.push(a);

    a = []; // Slide up
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.5, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const CHAIR = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/2, "+"]); // Hook shape
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", Math.PI/2, "+"]); // Hook shape
    ref.animations.push(a);

    a = []; // Sit down motion
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/6, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "-"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const TABLE = (ref) => {
    let a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", Math.PI/4, "+"]);
    ref.animations.push(a);

    a = []; // Flatten out table top
    a.push(["mixamorigRightForeArm", "rotation", "z", -Math.PI/8, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", Math.PI/8, "+"]);
    ref.animations.push(a);
    
    a = []; // Legs
    a.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "z", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const BAG = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/8, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/8, "+"]);
    ref.animations.push(a);

    a = []; // Bob up and down like carrying heavy bag
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    ref.animations.push(a);
    
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const CLOTHES = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    ref.animations.push(a);

    a = []; // Brush down chest
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "-"]);
    ref.animations.push(a);

    a = []; // Brush down again
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    ref.animations.push(a);
    
    a = [];
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "-"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const KEY = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(a);

    a = []; // Turn key in left palm
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/2, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const MONEY = (ref) => {
    let a = [];
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]); // Flat left palm up

    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3.5, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]); 
    ref.animations.push(a);

    a = []; // Right hand taps left palm
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "+"]);
    ref.animations.push(a);
    
    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    ref.animations.push(a);
    
    a = []; 
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);

    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    ref.animations.push(a);
    finish(ref);
};
