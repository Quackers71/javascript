function doIt(param) {
    param = 2;
}

var test = 1;
doIt(test);
console.log("test = " + test);

var age = 7;
function addOne(x) {
    x = x + 1;
    console.log("The parameter x = " + x);
}

addOne(age);
console.log("The variable age = " + age);
