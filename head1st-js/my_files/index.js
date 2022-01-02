
var radius = 5;

console.log("circleArea() function called before declaration.");
console.log("i.e. JavaScript doesn't care!");

var area = circleArea(radius);
console.log("\nvar area = circleArea(radius)");
console.log("returned area : " + parseFloat(area).toFixed(2));

function circleArea(r) {
    console.log("\nlocal variable declared within the circleArea() function");
    console.log("taken from 'var a = Math.PI * r * r;'");
    var a = Math.PI * r * r;
    console.log("a : " + a + "\n");
    return a;
}
