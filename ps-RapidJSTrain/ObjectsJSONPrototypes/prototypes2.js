


var project = {
    securityLevel: 2
};
var secretProject = Object.create(project);
console.log(secretProject.__proto__.__proto__ === Object.prototype); 
// true


var project = {
    securityLevel: 2
};
var secretProject = Object.create(project);
console.log(secretProject.__proto__ === Object.prototype); 
// false


var project = {
    securityLevel: 2
};
var secretProject = Object.create(project);
console.log(typeof secretProject.toString); // function


var project = {
    securityLevel: 2
};
var secretProject = Object.create(project);
console.log(secretProject.securityLevel); // 2