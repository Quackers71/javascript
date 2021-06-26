// Basically, just don't use eval


var bar = "bar";

function foo(str) {
    eval(str); // cheating! using evil stuff
    console.log(bar); // 42
};

foo("var bar = 42;");