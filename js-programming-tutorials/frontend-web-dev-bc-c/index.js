// Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS) via https://www.youtube.com/watch?v=zJSY8tbf_ys @ 56:00 / 21:14:41

// JavaScript Challenges #1, #2, #3, #4, #5

// #Ch1
let myBoolean = true;
console.log("myBoolean : " + myBoolean);

let myString = 'Hello World!';
console.log("myString : " + myString);

let firstNumber = 20;
console.log("firstNumber : " + firstNumber);

let secondNumber = 40;
console.log("secondNumber : " + secondNumber);

secondNumber = 80;
console.log("re-assigned secondNumber : " + secondNumber);

let myArray = [myBoolean, myString];
console.log(myArray);

let myObject = { firstProperty: myArray, sumProperty: firstNumber + secondNumber};
console.log("myObject : " + myObject);

console.log("typeof myArray : " + typeof(myArray));

// wasn't sure about this one
const firstProp = myObject.firstProperty;
const arrayValue = firstProp[1];
console.log("arrayValue: " + arrayValue);
console.log("myOb.firstProp : " + myObject.firstProperty[1]);
console.log("typeof arrayValue: " + typeof(arrayValue));

// #Ch4
const objectVariable = {
    property1: 'I am Property 1',
    property2: 'I am Property 2',
    property3: [20, 30, 40]
}
console.log("property3 : " + objectVariable.property3);


// #Ch5
const anotherArray = [10, 20, 30];
console.log("anotherArray : " + anotherArray[2]);



/* ********************************************************* */
const h1Body = document.querySelector('h1');
const buttonBody = document.querySelector('button');

const randomClickFunction = function() {
    const colors = ["#002942", "#0Ca7DB", "red", "blue", "green", "yellow", "orange", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    h1Body.style.color = randomColor;
}

h1Body.onclick = randomClickFunction;

function onClickEvent() {
    const el = document.createElement('p');
    el.innerText = "New Element Created";
    document.querySelector('.container').appendChild(el);
}

document.querySelector('button').onclick = onClickEvent;

// basic math function
// function doMath(x, y) {
//     return x * y;
// }

// const result = doMath(5, 87);
// console.log(result);

// ISO date and time
const myDate = new Date();
console.log(myDate.toISOString());
// Output - 2022-09-03T17:22:43.080Z