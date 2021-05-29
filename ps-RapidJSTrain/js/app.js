


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