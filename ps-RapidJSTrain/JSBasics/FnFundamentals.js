


var activateOrder = function(){
    console.log('Order activated.');
};

activateOrder(); // Order activated.
// activateOrder without parenthesis acts a reference to the variable


/* 
// Function expression
var activateOrder = function(){
    console.log('Order activated.');
};

console.log(typeof activateOrder); // function 
*/


/* function getOrder(){
    // nothing returned
};

var order = getOrder();
console.log(order); // undefined 
*/

/* function calcTotalPrice(quantity, price){
    return quantity * price;
};

var totalPrice = calcTotalPrice(2, 4.00);
console.log(totalPrice); // 8

var totalPrice = calcTotalPrice(3, 3.00);
console.log(totalPrice); // 9 
*/


/* function calcTotalPrice(quantity, price, currency){
    console.log(currency);
};

calcTotalPrice(2, 4.00); // undefined 
*/


/* function calcTotalPrice(quantity, price){
    console.log('Total price: ' + (quantity * price));
};

calcTotalPrice(2, 4.00); // Total price: 8 
*/


/* function printOrder(orderId){
    console.log('Printing order: ' + orderId);
};

printOrder('9002'); // Printing order: 9002
*/