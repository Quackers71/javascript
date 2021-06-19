


var myClass = function() {
    //'use strict';
    this.id = 9;
};
var c = new myClass();
console.log(c.id); // 9


var myClass = function() {
    'use strict';
    this.id = 9;
};
var c = new myClass();
console.log(c.id); // 9