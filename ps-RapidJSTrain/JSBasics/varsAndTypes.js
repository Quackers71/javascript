


/* var orderId = "ORD-9001";
orderId = 1201;
console.log(orderId); // 1201

var orderId;
console.log(orderId); // undefined
*/

/* 'use strict';
orderId = 9001;
console.log(orderId); // ReferenceError: orderId is not defined 
*/

/* var orderId = 9001.01;
console.log(typeof orderId); // number 
*/

var order = {
    orderId: 9001,
    isActive: true
};
console.log(typeof order); // object

var cancelledOrders = [9001, 9002, 9003];
console.log(typeof cancelledOrders); // object

var order = null;
console.log(typeof order); // object

function cancelOrder(orderId){

};
console.log(typeof cancelOrder); // function