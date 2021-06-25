


//  LHS    RHS
//target  source
var foo = "bar";

function bar() {
//      LHS    RHS
//    target  source
    var foo = "baz";

    function baz(foo) {
    //  LHS    RHS
        foo = "bam";
        bam = "yay";
    }
    baz(42);
};

console.log(foo);  // bar
console.log(bar); // output below
/* ƒ bar() {
    //      LHS    RHS
    //    target  source
        var foo = "baz";
    
        function baz(foo) {
        //  LHS    RHS
            foo = "bam";
            bam = "yay";
        }
        baz();
    } */


//bar(); // RHS
//foo; // "bar"
//bam; // "yay"
//baz(); // Error!

console.log("This is bar() it is " + bar() + " but is a type of :" + typeof(bar)); // undefined
console.log('The variable FOO is a ' + typeof(foo) + " which is equal to " + '"%s"', foo);
console.log('The variable BAM is a ' + typeof(bam) + " which is equal to " + '"%s"', bam);
console.log("This is baz() it is " + baz() + " but is a type of :" + typeof(baz)); // undefined
// Uncaught ReferenceError: baz is not defined

const style = 'font-weight: bold'
console.log('\n%cbam', style);