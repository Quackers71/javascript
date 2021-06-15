


var updateZipCode = function(newZip, country) {
    console.log(newZip + ' ' + country);
};
var zipCode = { 
    zip: '11787'
};
updateZipCode.apply(zipCode, '11888', 'us'); 
// Uncaught TypeError: CreateListFromArrayLike called on non-object

// Mark stated the Error was :
// Uncaught TypeError: Function.prototype.apply: Arguments list has wrong type