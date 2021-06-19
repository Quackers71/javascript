


var validateValues = function() {
    arguments[0] = 9;
    console.log(arguments[0]);
};
validateValues(1, true, 'Settings'); // 9


var validateValues = function() {
    console.log(arguments[0]);
};
validateValues(1, true, 'Settings'); // 1


var validateValues = function() {
    console.log(arguments.length);
};
validateValues(1, true, 'Settings'); // 3