


function foo(bar) {
    if (bar) {
        console.log(baz); // ReferenceError
        let baz = bar;
    }
}

foo("bar");