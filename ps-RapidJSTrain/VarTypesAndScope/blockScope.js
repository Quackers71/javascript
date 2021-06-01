


'use strict';
try {
    throw 'myArtificialBlockLevelVar'
}
catch (blockLeverVar){
    // blockLevlVar is in block scope
    // ...
};

console.log(blockLeverVar); // ReferenceError: blockLeverVar is not defined


/* 'use strict';

console.log(insideCatch);
try {
    throw 123;
}
catch (e) {
    var insideCatch = 'insideCatch';
    console.log(e); // undefined
}                   // 123 
*/


/* 'use strict';

try {
    console.log('in try: ' + e);
    throw 123;
}
catch (e) {
    console.log(e); // ReferenceError: e is not defined
} 
*/


/* 'use strict';
console.log(e); // ReferenceError: e is not defined
try {
    throw 123;
}
catch (e) {
} 
*/


/* 'use strict';

try {
    throw 123;
}
catch (e) {
    console.log(e); // 123
} 
*/