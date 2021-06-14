


var hireEmployee = function myHireEmployeeFn(name) {
    throw ('Error');
};
var action = hireEmployee;
action('JJ'); // Uncaught Error - myHireEmployeeFn


var hireEmployee = function(name) {
    throw ('Error');
};
var action = hireEmployee;
action('JJ'); // Uncaught Error - hireEmployee


var hireEmployee = function(name) {
    throw ('Error');
};
hireEmployee('JJ'); // Uncaught Error - hireEmployee


var hireEmployee = function(name) {
};
console.log(typeof hireEmployee); // function