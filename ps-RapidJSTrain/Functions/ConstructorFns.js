


var Employee = function(name) {
    this.name = name;
    this.salary = 50000;
};
Employee.prototype.giveRaise = function(raise) {
    this.salary += raise;
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
e1.giveRaise(100000);
console.log(e1.salary); // 150000
console.log(e2.salary); // 50000


var Employee = function(name) {
    this.name = name;
};
Employee.prototype.giveRaise = function() {
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
console.log(e1.giveRaise === e2.giveRaise); // true


var Employee = function(name) {
    this.name = name;
    this.giveRaise = function() {
    };
};
console.log(Employee.prototype === Object.prototype); // false


var Employee = function(name) {
    this.name = name;
    this.giveRaise = function() {
    };
};
console.log(typeof Employee.prototype); // object


var Employee = function(name) {
    this.name = name;
    this.giveRaise = function() {
    };
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
console.log(e1.giveRaise === e2.giveRaise); // false


var Employee = function(name) {
    this.name = name;
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
console.log(e1.__proto__ === e2.__proto__); // true


var Employee = function(name) {
    this.name = name;
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
console.log(e1 === e2); // false


var Employee = function(name, boss) {
    this.name = name;
    this.boss = boss;
};
var newEmployee = new Employee('JJ', 'JD Hogg');
console.log(newEmployee.boss); // JD Hogg


var Employee = function(name) {
    this.name = name;
};
var newEmployee = new Employee('JJ');
console.log(typeof newEmployee); // object
console.log(newEmployee.name); // JJ


console.log(typeof Object); // Function