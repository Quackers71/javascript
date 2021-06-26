


var foo;

try {
    foo.length;
}
catch (err) {
    console.log(err); // TypeError: Cannot read property 'length' of undefined
}

console.log(err); // Uncaught ReferenceError: err is not defined