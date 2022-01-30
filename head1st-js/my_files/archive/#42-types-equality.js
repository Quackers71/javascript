var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){return "abcdef"};
var test10 = null;

console.log("test1: "+typeof test1);
console.log("test2: "+typeof test2);
console.log("test3: "+typeof test3);
console.log("test4: "+typeof test4);
console.log("test5: "+typeof test5);
console.log("test6: "+typeof test6);
console.log("test7: "+typeof test7);
console.log("test8: "+typeof test8);
console.log("test9: "+typeof test9);
console.log("test10: "+typeof test10);

var myNum = 0/0;

if (myNum == NaN) {
    myNum = 0;    
    console.log(myNum);
} else {
    console.log("NaN isn't equal to anything!");
    console.log(myNum+" is a typeof: "+typeof(myNum));
} // number

if (isNaN(myNum)) {
    myNum = 0;
    console.log(myNum);
} 
// 0

if (99 == "99") {
    numString = "A number equals a string!";
    console.log(numString);
    var planet = document.getElementById("greenplanet");
    planet.innerHTML = numString;
} else {
    noWay = "No way a number equals a string";
    console.log(noWay);
    var planet = document.getElementById("greenplanet");
    planet.innerHTML = noWay;
}
// A number equals a string!

var testMe = "99";
if (testMe == 99) {
    console.log('"99" is equal to 99');
}

// Converts to String
var addi = 3 + "4";
console.log(addi); // 34

var plusi = "4" + 3;
console.log(plusi); // 43

// Converts to numbers
var mutli = 3 * "4";
console.log(mutli); // 12

var divi = 80 / "10";
console.log(divi); // 8

var mini = "10" - 5;
console.log(mini); // 5

// Other examples
var order1 = 1 + 2 + " pizzas";
console.log(order1); // 3 pizzas

var order2 = (1 + 2) + " pizzas";
console.log(order2); // 3 pizzas

var order3 = 1 + (2 + " pizzas");
console.log(order3); // 12 pizzas

var num = 3 + Number("4");
console.log(num); // 7

/* Outputs from the Console
test1: string
test2: number
test3: boolean
test4: object
test5: object
test6: undefined
test7: object
test8: object
test9: function
test10: object
NaN isn't equal to anything!
NaN is a typeof: number
0
A number equals a string!
"99" is equal to 99
34
43
12
8
5
3 pizzas
3 pizzas
12 pizzas
7
*/

inFin = Infinity - "1";
console.log(inFin); // Infinity

a = "42" + 42;
console.log(a); // 4242

b = 2 + "1 1";
console.log(b); // 21 1

c = 99 + 101;
console.log(c); // 200

d = "1" - "1";
console.log(d); // 0

console.log("Result: "+ 10/2); // 5

e = 3 + " bananas & " + 2 + " apples";
console.log(e); // 3 bananas & 2 apples
