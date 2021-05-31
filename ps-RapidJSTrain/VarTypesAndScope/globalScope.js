


'use strict'; // always operate in strict mode
var description = 'hardware product';

function updateProduct(){
    description = 'updated product'; // updated product
}

updateProduct();
console.log(description);

console.log(this === window); // true


var productId = 'PRD-2000';

console.log(productId);
console.log(window.productId); // window - browser global object