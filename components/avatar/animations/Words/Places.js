/**
 * Indian Sign Language (ISL) Animations: Places & Transport
 * - ROAD, CAR, BUS, TRAIN, MARKET, SHOP, CITY, VILLAGE, PARK, OFFICE
 */

const finish = (ref) => {
    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }
};

export const ROAD = (ref) => {
    let a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/4, "+"]);
    
    a.push(["mixamorigRightHand", "rotation", "z", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", Math.PI/2, "+"]);
    ref.animations.push(a);

    a = []; 
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/8, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/8, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    
    a.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const CAR = (ref) => {
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
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
    ref.animations.push(a);

    a = []; // Steer left
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/2.5, "-"]);
    ref.animations.push(a);

    a = []; // Steer right
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "+"]);
    ref.animations.push(a);

    a = []; // Reset
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
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const BUS = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/4, "+"]);
    ref.animations.push(a);

    a = []; // Steer large wheel
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3, "+"]);
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
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const TRAIN = (ref) => {
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

    a = []; // Chug forward
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "+"]);
    ref.animations.push(a);

    a = []; // Chug back
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/2.5, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3, "-"]);
    ref.animations.push(a);

    a = []; // Reset
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

export const MARKET = (ref) => {
    let a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
    
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", Math.PI/4, "+"]);
    ref.animations.push(a);

    a = []; 
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/6, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHand", "rotation", "y", -Math.PI/6, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", Math.PI/6, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);

    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const SHOP = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "+"]);
    a.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
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

export const CITY = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/6, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/2.5, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/6, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3.5, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const VILLAGE = (ref) => {
    let a = [];
    // Forming roof shape with both hands
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigRightHand", "rotation", "z", Math.PI/4, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/4, "-"]);
    ref.animations.push(a);

    a = []; 
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/8, "+"]);
    a.push(["mixamorigLeftHand", "rotation", "x", Math.PI/8, "+"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    a.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const PARK = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/3.5, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"]); // Trees
    a.push(["mixamorigLeftHand", "rotation", "x", Math.PI/6, "+"]);
    ref.animations.push(a);

    a = []; // Swing arms flat to show area
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/6, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/6, "+"]);
    a.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    a.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    ref.animations.push(a);
    finish(ref);
};

export const OFFICE = (ref) => {
    let a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", Math.PI/2, "+"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/4, "-"]);
    a.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/3, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/4, "+"]);
    ref.animations.push(a);

    a = []; 
    a.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/4, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/4, "-"]);
    ref.animations.push(a);

    a = [];
    a.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "-"]);
    a.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "-"]);
    
    a.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    a.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    a.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    a.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    ref.animations.push(a);
    finish(ref);
};
