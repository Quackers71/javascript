
/* let name = 'Yo Bro';
console.log(name); */

let firstName = "message"; // Dynamically typed - let
let surName = "Q"; // Statically typed - string
let fullName = firstName.concat(" "+surName);

console.log(fullName);

const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

let name2 = 'Dexter'; // String Literal
let age = 7; // Number Literal
let isApproved = true; // Boolean Literal
let fstName = undefined;
let selectedColour = null;

// creating a person Object with key value pairs - also known as an Object Literal
let person = {
    name: 'message',
    age: 30
};

console.log(person);

// Dot Notation
person.name = "Ella";
person.age = 15;

console.log(person.name);
console.log(person.age);

// Bracket Notation
let selection = 'name';
person[selection] = 'Judy';

console.log(person.name);

// Array Objects
let selectedColours = ['red', 'blue'];
selectedColours[2] = 'green';
selectedColours[3] = 21;

console.log(selectedColours);
console.log(selectedColours[0]);

console.log("typeof: "+typeof(selectedColours[0]));
console.log("items in this Array: "+selectedColours.length);

// An Array is a Data Structure to represent a list of items

// Functions

// Performing a task
function greet(name, lastName) {
    lastName = 'Qarikau'
    console.log('Hello '+name+" "+lastName+"!");

    }

greet('Dexter');
greet('Ella');

// Calculating a value
function square(num) {
    return num * num;
}

let num = square(21);
console.log(num);

// or just use
console.log(square(15));
