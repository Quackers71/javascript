


'use strict';
try {
    throw 'myArtificialBlockLevelVar'
}
catch (blockLeverVar){
    // blockLevlVar is in block scope
    // ...
};

console.log(blockLeverVar); // ReferenceError: blockLeverVar is not defined