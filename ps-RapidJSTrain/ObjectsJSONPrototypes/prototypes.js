


var project = anyObject;
project.someFunction();

// How does JS locate / resolve someFunction()?

// - project.somFunction()
// - project.prototype.someFunction()
// - project.prototype.prototype.someFunction()
// - project.prototype.prototype.prototype.someFunction()
// - etc...

/* In most browsers, we can access the prototype
    property by using the symbol __proto__.
    (Not Safe!) */

/* The prototype property is most easily accessed
    on the constructor functions.
    (Covered in the Functions module of this course) */