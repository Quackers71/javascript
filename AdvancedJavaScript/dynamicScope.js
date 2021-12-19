// theoretical dynamic scoping


function foo() {
    console.log(bar); // dynamic!
};

function baz() {
    var bar = "bar";
    foo();
}

baz();

/* app.js:5 Uncaught ReferenceError: bar is not defined
    at foo (app.js:5)
    at baz (app.js:10)
    at app.js:13 */