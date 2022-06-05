var beanCounter = 10;

function getNumberOfItems(ordertype) {
    var beanCounter = 5;
    console.log("local variable : " + beanCounter);
    if (ordertype == "order") {
        console.log("You have an Order!")
    } else {
        console.log("Argument passed : " + ordertype)
    }
    return beanCounter;
}

console.log("global variable : " + beanCounter);
var total = getNumberOfItems(20);
console.log("variable parameter call : " + total);
