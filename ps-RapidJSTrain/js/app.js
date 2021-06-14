


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