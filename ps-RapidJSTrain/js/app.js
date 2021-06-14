


'use strict';
var task = { };
Object.defineProperties(task, {
    'text': {
        value: 'New Task'
    }
});
var descriptor = Object.getOwnPropertyDescriptor(task, 'text');
console.log(descriptor); 
// Object {value: "New Task", writable: false, enumerable: false, configurable: false}