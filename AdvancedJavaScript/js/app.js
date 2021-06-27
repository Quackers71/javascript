


function foo(bar) {
    /*let*/ { let baz = bar;
        console.log(baz); // "bar"
    }
    console.log(baz); // ReferenceError
};

foo("bar");
// "bar"
// Uncaught ReferenceError: baz is not defined

// https://gist.github.com/getify/5285514