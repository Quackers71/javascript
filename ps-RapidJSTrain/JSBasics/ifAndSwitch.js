





var orderTotal = 99.99;
var discount;

switch (true) {
    case orderTotal >= 50 && orderTotal < 75:
        discount = 10;
        break;
    case orderTotal >= 75 && orderTotal < 100:
        discount = 20;
        break;
    case orderTotal >= 100:
        discount = 30;
        break;
    default:
        discont = 0;
}

console.log(discount); // 20


/* var orderType = 'unknown';
var shipMethod;

switch (orderType) {
    case 'business':
    case 'personal':
        shipMethod = 'UPS Ground';
        break;
};

console.log(shipMethod); // undefined 
*/


/* var orderType = 'business';
var shipMethod;

switch (orderType) {
    case 'business':
    case 'personal':
        shipMethod = 'UPS Ground';
        break;
    default:
        shipMethod = 'USPS';
};

console.log(shipMethod); // UPS Ground */


/* var orderType = 'business';
var shipMethod;

switch (orderType) {
    case 'business':
        shipMethod = 'FedEx';
        break;
    case 'personal':
        shipMethod = 'UPS Ground';
        break;
    default:
        shipMethod = 'USPS';
};

console.log(shipMethod); // FexEx 
*/


/* var orderType = 'business';
var shipMethod;

if (orderType == 'business')
    shipMethod = 'FedEx';
else if (orderType == 'personal')
    shipMethod = 'UPS Ground';
else
    shipMethod = 'USPS';

console.log(shipMethod); // FexEx */


/* var total = 99.99;
var freeShipping = false;
var savings;

if (total >= 100.00){
    freeShipping = true;
    savings = 29.99;
}
else {
    freeShipping = false;
    savings = 0;
}
console.log(savings); // 0 
*/


/* var total = 99.99;
var freeShipping = false;

if (total >= 100.00)
    freeShipping = true;
else
    freeShipping = false;

console.log(freeShipping); // false */


/* var total = 99.99;
var freeShipping = false;

if (total >= 100.00)
    freeShipping = true;

console.log(freeShipping); // false 
*/


/* var total = 99.99;
var freeShipping = false;

if (total >= 50.00)
    freeShipping = true;

console.log(freeShipping); // true 
*/