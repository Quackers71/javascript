


var total = (99, 88, 44); // don't use this!!!
console.log(total); // 44


var total = 99, tax = 9;
console.log(total); // 99
console.log(tax);   // 9


var total = 6;
total *= 4 + 1; // 4 + 1 = 5 * 6 = 30
console.log(total); // 30
// See Operator Precedence for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table


var total = 4;
total >>= 1; // 4 / 2 = 2
console.log(total); // 2


var total = 1;
total <<= 2; // 1 * 2 * 2 = 4
console.log(total); // 4


var total = 6;
total %= 4; // modulus = remainder
console.log(total); // 2


var total = 6;
total /= 3;
console.log(total); // 2


var total = 6;
total *= 4;
console.log(total); // 24


var total = 6;
total -= 4;
console.log(total); // 2


var total = 6;
total += 4; // total = total + 4
console.log(total); // 10