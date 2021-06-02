


var total = 300 - ""; // empty string is converted into a 0
console.log(total); // 300


/* var total = 300 - NaN;
console.log(total); // NaN 
*/


var obj = {
    valueOf: function(){ return 100; }
};
var total = 300 - obj;
console.log(total); // 200


/* var total = 300 - null;
console.log(total); // 300 
*/


/* var total = 300 - undefined;
console.log(total); // NaN 
*/


/* var total = "PRD300" - "ITEM200";
console.log(total); // NaN 
*/


// compared to addition, this would be a string
/* var total = "300" - "200";
console.log(total); // 100
console.log(typeof(total)); // number 
*/


/* var total = 3.8 - 2.1;
console.log(total.toFixed(3)); // 1.700 
*/