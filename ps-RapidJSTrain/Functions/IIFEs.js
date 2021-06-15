


+function() {
    var employeeName = 'Jill';
    console.log('Executed!');
}();
console.log(employeeName); // Executed!
// Uncaught ReferenceError: employeeName is not defined


var app = {};
var jQuery = {};
(function(ns, $, undefined) {
    ns.name = 'None';
    console.log(undefined);
})(app, jQuery); // undefined


var app = {};
var jQuery = {};
(function(ns, $) {
    ns.name = 'None';
    console.log($ === jQuery);
})(app, jQuery); // true


var app = {};
(function(ns) {
    ns.name = 'None';
})(app);

console.log(app.name); // None


(function() {
    var employeeName = 'Jill';
})();
console.log(employeeName);
// Uncaught ReferenceError: employeeName is not defined


(function() {
    console.log('Executed!');
}()); // Executed!

(function() {
    console.log('Executed!');
})(); // Executed!