


//  LHS    RHS
//target  source
var foo = "bar";

function bar() {
//      LHS    RHS
//    target  source
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

console.log("This is " + bar() + " but is a type of :" + typeof(bar)); // undefined
console.log('The variable FOO is a ' + typeof(foo) + " which is equal to " + '"%s"', foo);
console.log('The variable BAM is a ' + typeof(bam) + " which is equal to " + '"%s"', bam);
console.log("This is " + baz() + " but is a type of :" + typeof(baz)); // undefined


const style = 'font-weight: bold'
console.log('\n%cbam', style);