


var Address = function(line1) {
    this.line1 = line1;
};
Address.prototype.updateZipCode = function() {
    console.log(this);
};
var addr = new Address('123 State St.');
addr.updateZipCode();
// Address {line1: "123 State St."}