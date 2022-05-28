// The five falsey values in JS

var testThis; // undefined
if (testThis) {
    console.log("Yo"); // do something
}
var element = document.getElementById("elementThatDoesntExist"); // null
if (element) {
    console.log("Yo"); // do something 
}
if (0) { // 0
    console.log("Yo"); // do another thing
}
if ("") { // Empty string
    console.log("Yo"); // does code here ever get evaluated? Place your bets.
}
if (NaN) { // Not a Number
    console.log("Yo"); // Hmm, what's NaN doing in a boolean test?
}

/* 
undefined is falsey
null is falsey
0 is falsey
The empty string is falsey
NaN is falsey
*/

if ([]) {
    console.log("Yo");  // this will happen
}
var element = document.getElementById("greenplanet"); // elementThatDoesExist!
if (element) {
    console.log("Yo"); // so will this
}
if (1) {
    console.log("Yo"); // gonna happen
}
var string = "mercy me";
if (string) {
    console.log("Yo"); // this will happen too
}
