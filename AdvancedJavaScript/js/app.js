


function foo(bar) {
    if (bar) {
        console.log(baz); // ReferenceError
        let baz = bar;
    }
}

foo("bar");
//Uncaught ReferenceError: Cannot access 'baz' before initialization