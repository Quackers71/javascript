


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
//foo; // "bar" - Global Scope RHS
//bam; // "yay" - Global Scope RHS - GS created him
//baz(); // Error! GS RHS value = Nope!

console.log("This is bar() it is " + bar() + " but is a type of :" + typeof(bar)); // undefined
console.log('The variable FOO is a ' + typeof(foo) + " which is equal to " + '"%s"', foo);
console.log('The variable BAM is a ' + typeof(bam) + " which is equal to " + '"%s"', bam);
console.log("This is baz() it is " + baz() + " but is a type of :" + typeof(baz)); // undefined
// Uncaught ReferenceError: baz is not defined

/* In Non-strict mode, reference errors result in unfulfilled
or undeclared RHS references.  Automatic Globals esult in unfulfilled
or undeclared LHS references.
In strict mode, they both result in reference errors...
*/

const style = 'font-weight: bold'
console.log('\n%cbam', style);