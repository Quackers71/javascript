

var productType = '   Hardware   ';
var trimmed = productType.trim();
console.log('[' + trimmed + ']');

/* var productType = "Hardware";
console.log(productType.length); // 8 */

productType.trim(); // This won't work in JS as strings are immutable

console.log('[' + productType.trim() + ']'); // [Hardware] - Correct trim() format!
console.log(productType.toUpperCase()); // HARDWARE


console.log('Nike\'s Order'); // Nike's Order


console.log("The order is \"In Progress\""); // The order is "In Progress"