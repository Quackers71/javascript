


'use strict';
var project = {
    securityLevel: 2
};
var secretProject = Object.create(project);
console.log("securityLevel" in Object.prototype); // false


'use strict';
var project = {
    securityLevel: 2
};
var secretProject = Object.create(project);
console.log("toString" in secretProject); // true


'use strict';
var project = {
    securityLevel: 2
};
var secretProject = Object.create(project);
console.log("securityLevel" in secretProject); // true


'use strict';
var project = {
    securityLevel: 2
};
var secretProject = Object.create(project);
console.log(project.__proto__.isPrototypeOf(secretProject)); // true


'use strict';
var project = {
    securityLevel: 2
};
var secretProject = Object.create(project);
console.log(Object.prototype.isPrototypeOf(secretProject)); // true


'use strict';
var project = {
    securityLevel: 2
};
var secretProject = Object.create(project);
console.log(project.isPrototypeOf(secretProject)); // true


'use strict';
var project = {
    name: 'Top Secret Project',
    dueDate: '6/14/2021'
};
console.log(Object.prototype.isPrototypeOf(project)); // true


'use strict';
var project = {
    name: 'Top Secret Project',
    dueDate: '6/14/2021'
};
console.log(project.__proto__.hasOwnProperty('toString')); // true


'use strict';
var project = {
    name: 'Top Secret Project',
    dueDate: '6/14/2021'
};
console.log(project.hasOwnProperty('toString')); // false


'use strict';
var project = {
    name: 'Top Secret Project',
    dueDate: '6/14/2021'
};
console.log(project.hasOwnProperty('name')); // true