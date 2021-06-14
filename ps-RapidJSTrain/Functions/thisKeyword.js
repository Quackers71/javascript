


var Address = function(line1) {
    this.line1 = line1;
    console.log(this);
};
var addr = new Address('123 State St.');
// Address {line1: "123 State St."}


var employee = {
    name: 'Jeff',
    updateSalary: function() {
        var fn = function() {
        console.log(this === window);
        };
        fn();
    }
};
employee.updateSalary(); // true


var employee = {
    name: 'Jeff',
    updateSalary: function() {
        var fn = function() {
        console.log(this);
        };
        fn();
    }
};
employee.updateSalary(); // Window {...} Object
// Window {window: Window, self: Window, document: document, name: "Jeff", location: Location, …}


var employee = {
    name: 'Jeff',
    updateSalary: function() {
    console.log(this);
    }
};
employee.updateSalary(); // Object {name: "Jeff", updateSalary: ƒ}


var updateSalary = function() {
    console.log(this === window);
};
updateSalary(); // true


var name = 'Jeff';
console.log(this.name); // Jeff


console.log(this === window); // true


console.log(typeof this); // object