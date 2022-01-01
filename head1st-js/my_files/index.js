function calculateArea(r) {
    var area;

    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        console.log("This is inside the function");
        console.log("The value of r is : " + r);
        console.log("area = Math.PI * r * r is : " + area);
        return area;
        
    }
}

var radius = 5.2;
var theArea = calculateArea(radius);
console.log("\nThis is the var x = function(radius) invoked");
console.log("The radius is : " + radius);
console.log("The area is : " + parseFloat(theArea).toFixed(2));
