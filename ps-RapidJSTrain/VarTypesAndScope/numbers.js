


// Test if NaN
var n = NaN;
if (isNaN(n))
    console.log('NaN!'); // NaN!


console.log(typeof NaN); // number


var count;
var price = 5.00;
console.log(price / count); // NaN


console.log(Number.POSITIVE_INFINITY + ' ' + Number.NEGATIVE_INFINITY); // Infinity -Infinity


var n = Number.MAX_VALUE * 2;
console.log(n); // Infinity

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308


var value = 3.2e-4;
console.log(value); // 0.00032


var hex = 0x10;
console.log(hex); // 16

'use strict';
var oct = 070;
console.log(oct); // SyntaxError: Octal literals are not allowed in strict mode.

var oct = 070;
console.log(oct); // 56

/* var price = "0.99";
console.log(typeof price); // string  
*/


/* var quantity = 2;
var price = 0.99;
console.log(quantity * price); // 1.98 
*/