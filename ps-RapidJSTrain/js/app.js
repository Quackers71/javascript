

'use strict';
//var description = 'hardware product';

function updateProduct(){
    description = 'updated product'; //
}

updateProduct();
console.log(description);

console.log(this === window); // true


var productId = 'PRD-2000';

console.log(productId);
console.log(window.productId); // window - browser global object