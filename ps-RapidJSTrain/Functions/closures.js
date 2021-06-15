


var salaryUpdater = function(salary) {
    var currentSalary = salary;
    var generator = function() {
        currentSalary += 10000;
        return currentSalary;
    };
    return generator;
};

var updateFn = salaryUpdater(50000);
updateFn();
console.log(updateFn()); // 70000


var salaryUpdater = function(salary) {
    var currentSalary = salary;
    var generator = function() {
        currentSalary *= 2;
        return currentSalary;
    };
    return generator;
};

var updateFn = salaryUpdater(50000);
console.log(updateFn()); // 100000