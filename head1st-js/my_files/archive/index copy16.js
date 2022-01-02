var x = 32;
var y = 44;
var radius = 5;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

console.log("Original Global variables");
console.log("x = " + x);
console.log("y = " + y);
console.log("radius = " + radius);
console.log("centerX = " + centerX);
console.log("centerY = " + centerY);
console.log("width = " + width);
console.log("height = " + height + "\n\n");


function setup(width, height) {
    console.log("Undeclared Global variables within the setup() function");
    console.log("These were also Shadowed Global variables")
    centerX = width/2; // centerX is a Global variable as it wasn't declared!
    console.log("centerX : " + centerX);
    centerY = height/2; // centerY is a Global variable as it wasn't declared!
    console.log("centerY : " + centerY);
}

function computeDistance(x1, y1, x2, y2) {
    console.log("\nlocal variables declared within the computeDistance() function");
    var dx = x1 - x2;
    console.log("dx : " + dx);
    var dy = y1 - y2;
    console.log("dy : " + dy);
    var d2 = (dx * dx) + (dy * dy);
    console.log("d2 : " + d2)
    var d = Math.sqrt(d2);
    console.log("d : " + d);
    return d;
}

function circleArea(r) {
    console.log("\nlocal variable declared within the circleArea() function");
    var area = Math.PI * r * r;
    console.log("area : " + area + "\n");
    return area;
}

setup(width, height);
var area = circleArea(radius);
var distance = computeDistance(x, y, centerX, centerY);
console.log("\nfunction calls (output to 2 decimal places)");
console.log("Area     : " + parseFloat(area).toFixed(2));
console.log("Distance : " + parseFloat(distance).toFixed(2));
