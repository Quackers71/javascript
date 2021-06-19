

'use strict';
var obj = {};
with (obj) {

} 
// Uncaught SyntaxError: Strict mode code may not include a with statement


var obj = {};
with (obj) {

} // Nothing shows


var actNow = function() {
    'use strict';
    var fn = function(a, a) {
    };
};
actNow();
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context


var actNow = function() {
    var fn = function(a, a) {
    };
};
actNow();
// Nothing shows


var actNow = function() {
    'use strict';
    newVar = 9;
    delete newVar;
};
actNow();
// Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.


var actNow = function() {
    //'use strict';
    newVar = 9;
    delete newVar;
};
actNow();
// Nothing shows


var actNow = function() {
    //'use strict';
    newVar = 9;
};
actNow();
// Nothing shows


var actNow = function() {
    'use strict';
    newVar = 9;
};
actNow();
// Uncaught ReferenceError: newVar is not defined