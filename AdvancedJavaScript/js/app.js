


var foo = "foo";

(function(bar) {
    var foo = bar;
    console.log(foo); // "foo"
})(foo);

console.log(foo); // "foo"