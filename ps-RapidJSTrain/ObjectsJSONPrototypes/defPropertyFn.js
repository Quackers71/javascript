


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


'use strict';
var task = { };
Object.defineProperties(task, {
    'text': {
        value: 'New Task'
    },
    'dueDate': {
        value: '6/14/21'
    }
});
console.log(task.text + ' Due: ' + task.dueDate);
// New Task Due: 6/14/21


'use strict';
var task = {
    _dueDate: '6/14/21'
};
Object.defineProperty(task, 'dueDate', {
    get: function() {
        return this._dueDate;
    },
    set: function(newValue) {
        this._dueDate = newValue;
    }
});
task._dueDate = '2/2/21'
console.log(task._dueDate); // 2/2/21


'use strict';
var task = {
    _dueDate: '6/14/21'
};
Object.defineProperty(task, 'dueDate', {
    get: function() {
        return this._dueDate;
    }
});
console.log(task._dueDate); // 6/14/21


'use strict';
var task = { };
Object.defineProperty(task, 'text', {
    value: 'Get this job done!',
    configurable: true
});
Object.defineProperty(task, 'text', {
    value: 'Done!'
});
console.log(task.text); // Done!


'use strict';
var task = { };
Object.defineProperty(task, 'text', {
    value: 'Get this job done!',
    configurable: false
});
Object.defineProperty(task, 'text', {
    value: 'Done!'
});
console.log(task.text);
// TypeError: Cannot redefine property: text at Function.defineProperty


'use strict';
var task = {};
Object.defineProperty(task, 'text', {
    value: 'Get this job done!',
    //enumerable: true
});
for (var f in task)
console.log(f); // Nothing


'use strict';
var task = {};
Object.defineProperty(task, 'text', {
    value: 'Get this job done!',
    enumerable: true
});
for (var f in task)
console.log(f); // text


'use strict';
var task = {};
Object.defineProperty(task, 'text', {
    value: 'Get this job done!',
    //writable: true
});
task.text = task.text + ' ... NOW!';
console.log(task.text); // Get this job done! ... NOW!
// TypeError: Cannot assign to read only property 'text' of object '#<Object>'


'use strict';
var task = {};
Object.defineProperty(task, 'text', {
    value: 'Get this job done!',
    writable: true
});
task.text = task.text + ' ... NOW!';
console.log(task.text); // Get this job done! ... NOW!


var task = {};
Object.defineProperty(task, 'text', {
    value: 'Get this job done!'
});
console.log(task.text); // Get this job done!