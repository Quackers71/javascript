


var foo = "foo";

(function(bar) {
    var foo = bar;
    console.log(foo); // "foo"
})(foo);

console.log(foo); // "foo"


var foo = "foo";

(function() {
    var foo = "foo2";
    console.log(foo); // "foo2"
})();

console.log(foo); // "foo"