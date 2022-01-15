


'use strict'; // with this - ReferenceError: description is not defined
var description = 'hardware product';

function updateProduct(){
    description = 'updated product'; // updated product - no declaration makes this a global variable
}

updateProduct();
console.log(description);

console.log(this === window); // true


var productId = 'PRD-2000';

console.log(productId);
console.log(window.productId); // window - browser global object