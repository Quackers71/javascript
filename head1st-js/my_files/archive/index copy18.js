function clunk(times) {
    var num = times;
    console.log("clunk(" + times + ")");
    while (num > 0) {
        display("clunk(" + num + ")");
        num = num -1;
    }
}

function thingamajig(size) {
    var facky = 1;
    console.log("inside function thingamajig(size)    : " + size);
    clunkCounter = 0; // global shadow variable
    if (size == 0) {
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 1) {
            console.log("facky = " + facky);
            facky = facky * size;
            console.log("facky = facky * size(" + size + ") | now equals : " + facky);
            size = size - 1;
            console.log("size = size -1 | size now equals     : " + size);
        }
        console.log("while loop finished");
        clunk(facky);
    }
}

function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
}

var testNum = 4;
var clunkCounter = 0;
thingamajig(testNum);
console.log("thingamajig(testNum) = " + testNum + ", so the result = " + clunkCounter + " loops");

/* var testNum = 0;
while (testNum <= 5){
    var clunkCounter = 0;
    thingamajig(testNum);
    console.log("thingamajig(" + testNum + ") result = " + clunkCounter);
    console.log("\n");
    n = n + 1;
} */
