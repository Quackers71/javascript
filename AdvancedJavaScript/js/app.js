


var foo = "foo";

(function(bar) {
    var foo = bar;
    console.log(foo);
})(foo); // })(foo); - Immediately executing the value of the expression stack.

console.log(foo);


var foo = "foo";

(function(bar) {
    var foo = bar;
    console.log(foo);
}(foo)); // }(foo)); - an alternative Stylistic choice

console.log(foo);