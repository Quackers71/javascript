


var defaultSettings = {
    who: 'default'
};
var userSettings;
var value = userSettings || defaultSettings;
console.log(value); // Object {who: "default"}


var defaultSettings = {
    who: 'default'
};
var userSettings = {
    who: 'user'
};
var value = userSettings || defaultSettings;
console.log(value); // Object {who: "user"}


var obj = {
    calc: 'Logical AND'
};
var value = false || 99;
console.log(value); // 99


var obj = {
    calc: 'Logical AND'
};
var value = obj || 99;
console.log(value); // Object {calc: "Logical AND"}


var value = false || false;
console.log(value); // false


var value = false || true;
console.log(value); // true


var value = true || false;
console.log(value); // true


var value = true || true;
console.log(value); // true


var productId = 5;
var value = false && ++productId;
console.log(productId); // 5


// if the 1st operand is false JS will accept false and ignore the error
var value = false && productId;
console.log(value); // false


var value = "Z" && NaN;
console.log(value); // NaN 


var value = "Z" && undefined;
console.log(value); // undefined


var value = "Z" && null;
console.log(value); // null


var value = null && 99;
console.log(value); // null


var obj = {
    calc: 'Logical AND'
};
var value = true && obj;
console.log(value); // Object {calc: "Logical AN


var obj = {
    calc: 'Logical AND'
};
var value = obj && obj;
console.log(value); // Object {calc: "Logical AND"}


var obj = {
    calc: 'Logical AND'
};
var value = obj && 0;
console.log(value); // 0


// In JavaScript if the 1st operand is an Object then the 2nd operand is always returned
var obj = {
    calc: 'Logical AND'
};
var value = obj && 99;
console.log(value); // 99


var value = false && false;
console.log(value); // false


var value = false && true;
console.log(value); // false


var value = true && false;
console.log(value); // false


var value = true && true;
console.log(value); // true


var value = !!false; // !!false - converts anything firstly into a boolean value
console.log(value); // false


var value = !NaN;
console.log(value); // true


var value = !undefined;
console.log(value); // true


var value = !null;
console.log(value); // true


var value = !new Object();
console.log(value); // false


var value = !" ";
console.log(value); // false


var value = !"A";
console.log(value); // false


var value = !"";
console.log(value); // true


var value = !0;
console.log(value); // true


var value = !99;
console.log(value); // false


var value = !false;
console.log(value); // true


var value = !true;
console.log(value); // false