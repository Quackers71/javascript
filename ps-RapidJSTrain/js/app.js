


var total = NaN; // output = (nothing)
if (total < 5)
    console.log('less than 5');
if (total <= 5)
    console.log('greater than or equal to 5');


if ('42' < '142') // false - compares as strings so 1 comes before 4
    console.log('true'); 
else
    console.log('false');


if ('42' < 55) // true - JS will convert string to number
    console.log('true');
else
    console.log('false');


if ("Beta".toLowerCase() < "alpha".toLowerCase()) // false
    console.log('true'); 
else
    console.log('false');


if ("Beta" < "alpha") // true
    console.log('true'); 
else
    console.log('false');


if ("beta" < "Alpha") // false - ascii or unicode values
    console.log('true'); //      Capitals come before Lowercase
else
    console.log('false');