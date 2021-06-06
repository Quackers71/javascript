

// Objects in JS are collections of Key: Value pairs
// a Function within an object is a classed as a Method
const person = {
    name: "Rob",
    walk: function() {}, // walk is Method in the person Object
    talk() {} // shorter definition
};
// So this is a person Object with three members
// one Property and two Methods

person.talk(); // accessing one of the members
person.name = ''; // use dot notation, if you know the Property or Method

const targetMember = 'name';
person[targetMember.name] = 'Bob';