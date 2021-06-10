


// Reference Type Storage
// Reference Types reference the same object

var o = {           // o: [pointer] - unknown memory location
    name: "Jill"
};
console.log(o);

var o2 = o; // o2: [pointer]
console.log(o2);

o2.name = "Jack";
console.log('o2.name = "Jack";');
console.log("o2.name is now: " + o2.name);
console.log("o.name is now: " + o.name);

if (o2 === o)  // true
    console.log(true);
else
    console.log(false);


// Primitive Type Storage

var n = 42; // n: 42
var s = "forty-two"; // s: forty-two
var b = true; // b: true


var n = 42; // n: 42
var a = n; // n is now copied to a: 42
a = 9; // a: 9