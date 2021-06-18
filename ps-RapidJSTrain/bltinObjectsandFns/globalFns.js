


var globalVar = 'foo';
var code = console.log(globalVar);
eval(code); // foo


var path = "%5Cstart%5C%2B";
console.log(decodeURIComponent(path)); // \start\+


var path = "\\start\\+";
console.log(decodeURI(path)); // \start\+


var path = "\\start\\+";
console.log(encodeURIComponent(path)); // %5Cstart%5C%2B


var path = "\\start\\+";
console.log(encodeURI(path)); // %5Cstart%5C+


var path = "\\start\\";
console.log(encodeURI(path)); // %5Cstart%5C


var value = isFinite(9 / 0);
console.log(value); // false


var value = isNaN(9 / 0);
console.log(value); // false


var value = isNaN(NaN);
console.log(value); // true


var value = isFinite(42);
console.log(value); // true


var value = isFinite(Number.POSITIVE_INFINITY);
console.log(value); // false


var value = parseFloat('1239e-1');
console.log(value); // 123.9


var value = parseFloat('z123.9');
console.log(value); // NaN


var value = parseFloat('123.9');
console.log(value); // 123.9


var value = parseInt('C000', 16);
console.log(value); // 49152 < The Hexidecimal value


var value = parseInt(' ');
console.log(value); // NaN


var value = parseInt('1234.9');
console.log(value); // 1234


var value = parseInt('12z34');
console.log(value); // 12


var value = parseInt('b1234');
console.log(value); // NaN


var value = parseInt('1234');
console.log(value); // 1234