


var updateZipCode = function(newZip, country) {
    console.log(newZip + ' ' + country);
};
var zipCode = { 
    zip: '11787'
};
updateZipCode.apply(zipCode, '11888', 'us'); 
// Uncaught TypeError: CreateListFromArrayLike called on non-object

// Mark stated the Error was :-
// Uncaught TypeError: Function.prototype.apply: Arguments list has wrong type


var updateZipCode = function(newZip, country) {
    console.log(newZip + ' ' + country);
};
var zipCode = { 
    zip: '11787'
};
updateZipCode.apply(zipCode, ['11888', 'us']); // 11888 us


var updateZipCode = function(newZip, country) {
    console.log(newZip + ' ' + country);
};
var zipCode = { 
    zip: '11787'
};
updateZipCode.call(zipCode, '11888', 'us'); // 11888 us


var updateZipCode = function() {
    console.log(this);
};
var zipCode = { 
    zip: '11787'
};
updateZipCode.call(zipCode); // {zip: "11787"}


var updateZipCode = function() {
    console.log(this);
}
updateZipCode.call({ zip: '11787'}); // {zip: "11787"}


var updateZipCode = function() {
    console.log(this);
}
updateZipCode.call({}); // Empty Object {}


var updateZipCode = function() {
    console.log(this);
}
updateZipCode();
// Window {window: Window, self: Window, document: document, name: "Jeff", location: Location, …}