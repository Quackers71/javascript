


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