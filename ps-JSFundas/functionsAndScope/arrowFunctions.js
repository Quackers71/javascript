
let getId = (prefix, suffix) => {
    console.log(getId);
    return prefix + 123 + suffix;
};
console.log( getId('ID: ', '!') ); // ID: 123!


/* let getId = (prefix, suffix) => prefix + 123 + suffix;
console.log( getId('ID: ', '!') ); // ID: 123!
*/


/* let getId = prefix => prefix + 123;
console.log( getId('ID: ') ); // ID: 123 
*/


/* let getId = () => 123;
console.log( getId() ); // 123 
*/

/* let getId = _ => 123;
console.log( getId() ); // 123 
*/

// Arrow functions do not have their own 'this' value.
// 'this' refers to the enclosing context.