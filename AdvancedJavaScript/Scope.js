


//  LHS    RHS
var foo = "bar";

function bar() {
//      LHS    RHS
    var foo = "baz";
};

function baz(foo) {
//  LHS    RHS
    foo = "bam";
    bam = "yay";
};
baz();

console.log(foo);  // bar
console.log(bar);
/* ƒ bar() {
    var foo = "baz";
} */
//console.log(bam);
// Uncaught ReferenceError: bam is not define

bar();
foo; // "bar"
bam; // "yay"
baz(); // Error!

console.log(bar()); // undefined
console.log(foo); // bar
console.log(bam); // yay
console.log(baz()); // undefined