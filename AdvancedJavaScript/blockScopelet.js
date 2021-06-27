

// So the 'let' keyword will hijack implicitly the scope
// of whatever block it appears in.
function foo(bar) {
    if (bar) {
        let baz = bar;
        if (baz) {
            let bam = baz;
        }
        console.log(bam); // Uncaught ReferenceError: bam is not defined
    }
    console.log(baz); // ReferenceError
};

foo("bar");


function foo() {
    var bar = "bar";
    for (let i = 0; i < bar.length; i++) {
        console.log(bar.charAt(i));
    }
    console.log(i); // ReferenceError
};

foo();

// b
// a
// r
// Uncaught ReferenceError: i is not defined