// On the compiling phase the two variables will be 
// declared as per code block #2 assignments were left
// in place...

//hoisted to the top of the code
// #2
var a; // declaration
var b; // declaration
a;
b;
a = b; // assignment
b = 2; // assignment
b;
a;


// what was originally written
// #1
a;
b;
var a = b;
var b = 2;
b;
a;