// Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS) via https://www.youtube.com/watch?v=zJSY8tbf_ys @ 01:51:03 / 21:14:41

// JavaScript operators

// Arithmetic operators
// + - * / % ++ --

let x = 10;
console.log("x : " + x);
x = x + 5;
console.log("x=x+5 : " + x);

x++;
console.log("x++ : " + x);

// Assignment operators
// = += -= *= /=

x +=5;
console.log("x+=5 : " + x);

// Comparison operators
// == === != !== < > >= <=

const result = 20 > 18;
console.log("20 > 18 : " + result);

const result2 = 20 === 20;
console.log("20 === 20 : " + result2);

const result3 = 20 === "20";
console.log('20 === "20" : ' + result3);
// or
const stringValue = "20";
const numberValue = 20;
let compareValue = stringValue === numberValue;
console.log("stringValue === numberValue : " + compareValue);
console.log("stringValue type : " + typeof(stringValue));

let compareValue2 = Number(stringValue) === numberValue;
console.log("Number(stringValue) === numberValue : " + compareValue2);

let compareNotValue = stringValue != numberValue;
console.log("stringValue != numberValue : " + compareNotValue);

let compareNotValue2 = stringValue !== numberValue;
console.log("stringValue !== numberValue : " + compareNotValue2);

const myObj = {
    property1: 'some value',
    property2: 20
};

const myArray = [1, 2, 3, 4, 5];
const anotherArray = [1, 2, 3, 4, 5];
compareArrays = myArray === anotherArray;
console.log("myArray === anotherArray : " + compareArrays);

// Ternary operators

const ternaryResult = 20 === 20 ? 'values match' : 'values do not match';
// const variable = {expression} if 'values match' else 'values do not match';
console.log("ternaryResult : " + ternaryResult);

// equivelant if / else comparison example
let resultVariable;
if (20 === 20) {
    resultVariable = 'values match';
} else {
    resultVariable = 'values do not match';
}
console.log("if / else comparison : " + resultVariable);

// Logical operators
// && || !

const ternaryAndResult = 20 === 20 && 12 === 10 ? 'values match' : 'values do not match';
// const variable = {expression} if 'values match' else 'values do not match';
console.log("ternary&&Result : " + ternaryAndResult);

const ternaryOrResult = 20 === 20 || 12 === 10 ? 'values match' : 'values do not match';
// const variable = {expression} if 'values match' else 'values do not match';
console.log("ternary||Result : " + ternaryOrResult);

const notTernaryResult = !(10 === 10) ? 'values match' : 'values do not match';
// const variable = {expression} if 'values match' else 'values do not match';
console.log("notTernaryResult !(10 === 10) : " + notTernaryResult);

// example expression
const result4 = !(((40 / 20) === 2 && true) || ('yes' === 'no'));
console.log("!(((40 / 20) === 2 && true) || ('yes' === 'no')) : " + result4);

const step1 = 40 / 20;
console.log("step1 = 40 / 20 : " + step1);
const step2 = step1 === 2;
console.log("step2 = step1 === 2 : " + step2);
const step3 = step2 & true;
console.log("step3 = step2 & true : " + step3);
const step4 = 'yes' === 'no';
console.log("step4 = 'yes' === 'no' : " + step4);
const step5 = step3 || step4;
console.log("step5 = step3 || step4 : " + step5);
const step6 = !step5;
console.log("step6 = !step5 : " + step6);

const result5 = (() => {
    return 20;
})(); // immediately invoked function expression (IIFE)
console.log("result5 : " + result5);
// https://twitter.com/profulsadangi/status/1286557942645366784/photo/1



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