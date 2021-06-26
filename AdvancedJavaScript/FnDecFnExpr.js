// Function Declarations, Function Expressions and Block Scope


var foo = function bar() { // Name Fn Expression i.e. bar()
    var foo = "baz";

    function baz(foo) { // Fn Declaration
        foo = "bam";
        bam = "yay";
    }
    baz();
};

foo();
bar(); // Uncaught ReferenceError: bar is not defined