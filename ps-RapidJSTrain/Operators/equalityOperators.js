


if (55 !== 55) // false, as they're identical
console.log('true'); 
else
console.log('false');


if (null === undefined) // false, however true with ==
console.log('true'); 
else
console.log('false');


if (false === 0) // false
console.log('true'); 
else
console.log('false');


if (55 === 55) // true
console.log('true'); 
else
console.log('false');


if (55 === '55') // false
console.log('true'); 
else
console.log('false');


if (42 != 'forty-two') // true
console.log('true'); 
else
console.log('false');


if (NaN == NaN) // false
console.log('true'); 
else
console.log('false');


if (null == 0) // false
console.log('true'); 
else
console.log('false');


if (undefined == 0) // false
console.log('true'); 
else
console.log('false');


if (null == undefined) // true
console.log('true'); 
else
console.log('false');


var obj = {
name: 'Trigger'
};
var obj2 = obj;
if (obj == obj) // true - object pointer is copied
console.log('true');
else
console.log('false');


var obj = {
name: 'Trigger'
};
if (obj == obj) // true
console.log('true');
else
console.log('false');


var obj = {
name: 'Trigger' 
};
var obj2 = {
name: 'Trigger'
};
if (obj == obj2) // false - The Object has it's own memory space
console.log('true');
else
console.log('false'); 


var obj = {
toString: function() { return 42; }
}
if (42 == obj) // true
console.log('true');
else
console.log('false');


var obj = {
valueOf: function() { return 42; }
}
if (42 == obj) // true
console.log('true');
else
console.log('false');


if (42 == '42') // true - converts to numeric
console.log('true'); 
else
console.log('false');


if (false == 0) // true
console.log('true'); 
else
console.log('false');


if (true == 2) // false
console.log('true'); 
else
console.log('false');


if (true == 1) // true
console.log('true'); 
else
console.log('false');