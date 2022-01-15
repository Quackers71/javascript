


var value = 'calc';
value = -value;
console.log(value); // NaN


var value = -42;
value = -value;
console.log(value); // 42


var value = 42;
value = -value;
console.log(value); // -42


var value = 'calc';
value = +value;
console.log(value); // NaN


var value = -9;
value = +value;
console.log(value); // -9


var value = 9;
value = +value;
console.log(value); // 9


var level = null;
console.log(level++); // 0


var level = null;
console.log(++level); // 1


var level;
console.log(++level); // NaN


var level = 5;
var base = 10;
var nextLevel = --level * base;
console.log(nextLevel); // 40


var level = 5;
var base = 10;
var nextLevel = level-- * base;
console.log(nextLevel); // 50


var level = 5;
var nextLevel = --level;
console.log(nextLevel); // 4


var level = 5;
var nextLevel = level++;
console.log(nextLevel); // 5


var level = 5;
var nextLevel = ++level;
console.log(nextLevel); // 6


var level = 5;
level++;
console.log(level); // 6


var level = 5;
++level;
console.log(level); // 6