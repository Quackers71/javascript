// Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS) via https://www.youtube.com/watch?v=zJSY8tbf_ys @ 02:50:09 / 21:14:41

// JavaScript functions, conditionals & loops

if ('some string' === 'another string') {
    console.log('the strings are equal');
} else {
    console.log('the strings are not equal');
}

const firstNumber = 20;
const secondNumber = 10;
const jsExpression = firstNumber > secondNumber; // true

if (jsExpression) {
    console.log('this expression is true');
} else if (firstNumber > 0) {
    console.log('the expression is false and the firstNumber is greater than 0');
} else {
    console.log('expression false, and firstNumber 0 or less');
}

const colors = ['orange', 'green', 'yellow', 'purple', 'blue'];
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];

// Conditionals - Switch / Case statement
switch (randomColor) {
  case 'orange':
    console.log('the color is orange');
    break;
  case 'green':
    console.log('the color is green');
    break;
  case 'yellow':
    console.log('the color is yellow');
    break;
  case 'purple':
    console.log('the color is purple');
    break;
  case 'blue':
    console.log('the color is blue');
    break;
  default:
    console.log('no color found');
}

// Conditionals
// if (randomColor === 'orange') {
//     console.log('the color is orange');
// } else if (randomColor === 'green') {
//     console.log('the color is green');
// } else if (randomColor === 'yellow') {
//     console.log('the color is yellow');
// } else if (randomColor === 'purple') {
//     console.log('the color is purple');
// } else if (randomColor === 'blue') {
//     console.log('the color is blue');
// } else {
//     console.log('no color found');
// }

// for (let x = 1; x < 6; x++) {
//     console.log(x);
// }

const arr = ['Polkadot', 'Cardano', 'Ethereum', 20, 20, 40, 50];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        console.log(arr[i]);
    }
}

// a function with parameters
function myFunction(param1, param2) {
  console.log(param1 + ' ' + param2 + ' this is my first function!');
}
// call or envoke the function (with arguments)
myFunction('Hello', 'World!');

// immediately invoked function (expression) IIFE
(function anotherFunction() {
  console.log('Hello World!');
})();

// an anonymous function
const aNewFunction = function() {
  console.log('another one');
}

aNewFunction();
console.log(typeof(aNewFunction));


const arrowFunction = () => {
  console.log('i am an arrow function');
}
arrowFunction();

// return value from a function
const returnFunction = () => {
  const a = 20;
  return a;
}
const result = returnFunction();
console.log("returnFunction : " + result);

const returnFunction2 = () => {
  const a = 20;
  return a < 30; // true
}
const result2 = returnFunction2();
console.log("returnFunction2 : " + result2);

const improperReturnFunction = () => {
  let myNum = 20;
  return myNum;
  myNum = 50; // unreachable code after return statement
}
const result3 = improperReturnFunction();
console.log("improperReturnFunction : " + result3);

const globalNumber = 20;
let myFunc = () => {
  if (globalNumber  < 50) {
    return 'returned the function early';
  }
  return 40;
}
const result4 = myFunc();
console.log('myFunc : ' + result4);

function myOtherFunction() {
  return 20;
}
console.log("myOtherFunction : " + myOtherFunction());

const aliasVariable = myOtherFunction;
console.log("maliasVariable = myOtherFunction : " + aliasVariable());

const myObj = {
  prop1: 50,
  prop2: myOtherFunction
}
console.log("myObj.prop2() : " + myObj.prop2());

const myString = "hack";
myString.replace('h', 'z');
console.log("myString : " + myString);
const newString = myString.replace('h', 'z');
console.log("newString : " + newString);

let str = 'Hello World!';
result5 = str.toLocaleUpperCase().split(" ");
console.log(result5);
console.log("index " + result5.indexOf("WORLD!"));

const step1 = str.toUpperCase();
const step2 = step1.split(" ");
const step3 = step2.indexOf("WORLD!");
console.log("step3 : index " + step3);



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

// ISO date and time
const myDate = new Date();
console.log(myDate.toISOString());
// Output - 2022-09-03T17:22:43.080Z