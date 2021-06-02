


var id = 2000 + NaN;
console.log(id); // Nan
console.log(typeof(id)); // number


/* var id = 2000 + null;
console.log(id); // 2000
console.log(typeof(id)); // number 
*/


/* var id = "PRD" + undefined;
console.log(id); // PRDundefined
console.log(typeof(id)); // string 
*/


/* var id = 2000 + undefined;
console.log(id); // Nan
console.log(typeof(id)); // number
*/


/* var id = "PRD" + 2000;
console.log(id); // PRD2000
console.log(typeof(id)); // string 
*/


/* var id = "PRD" + "X99";
console.log(id); // PRDX99 
*/


// use the toFixed(2) to fix the floating point numbers issue
// the 2 stands for two decimal places
var total = 5.1 + 3.3;
console.log(total.toFixed(2)); // 8.40


/* var total = 5.1 + 3.3;
console.log(total); // 8.399999999999999 
*/


/* var total = 5 + 3;
console.log(total); // 8 
*/