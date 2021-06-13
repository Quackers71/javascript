


var project = {
    name: 'project Phoenix'
};
console.log(project.__proto__ === Object.prototype); // true


var project = {
    name: 'project Phoenix'
};
console.log(project.__proto__ === Object); // false


var project = {
    name: 'project Phoenix'
};
console.log(typeof project.__proto__); // object


var project = {
    name: 'project Phoenix'
};
console.log(project.prototype); // undefined


console.log(typeof Object.prototype.toString); // function


console.log(typeof Object.prototype); // object


var project = {
    name: 'project Phoenix'
};
console.log(project.toString()); // [object Object]


var project = {
    name: 'project Phoenix'
};
console.log(project.foo()); // TypeError: project.foo is not a function