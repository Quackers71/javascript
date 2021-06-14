


var hireEmployee = function myHireEmployeeFn(name) {
    throw ('Error');
};
var action = hireEmployee;
action('JJ'); // Uncaught Error - myHireEmployeeFn