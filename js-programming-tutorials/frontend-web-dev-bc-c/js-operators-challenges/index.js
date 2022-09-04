// Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS) via https://www.youtube.com/watch?v=zJSY8tbf_ys @ 02:39:10 / 21:14:41

// JavaScript operators challenges
// Ch#1
let numberVariable = 0; // was a const
numberVariable++;
numberVariable++;
numberVariable++;
console.log(numberVariable);

// Ch#3 // wasn't sure about this one
const expression1 = 100 % 50;
console.log("expression1 = 100 % 50 : " + expression1);
const expression2 = 100 / 50;
console.log("expression2 = 100 / 50 : " + expression2);
const expression3 = expression1 < expression2;
console.log("expression3 = expression1 < expression2 : " + expression3);
const expression4 = expression3 && 300 + 5 === 305;
console.log("expression4 = expression3 && 300 + 5 === 305 : " + expression4);
const expression5 = !expression4;
console.log("expression5 = !expression4 : " + expression5);

let firstTotal;
const expressionResult = ( firstTotal = ((100 % 50) < 100 / 50) && firstTotal && (300 + 5 === 305));
console.log("expressionResult : " + expressionResult);

// Answer
const correctResult = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305);
console.log("correctResult : " + correctResult);

// Ch#4
const myObj = {
    prop1: 'first value',
    prop2: 20
};
const myArray = [40, 50, 2];
const result = myObj.prop2 === (myArray[0] / myArray[2]);
console.log("Ch#4 result : " + result); // true

// Ch#5
const myObject = {
    nestedObject1: {
        price: 100,
        quantity: 5
    },
    nestedObject2: {
        price: 150,
        quantity: 2
    }
};
const my2ndArray = [myObject.nestedObject1, myObject.nestedObject2];
const result2 = (my2ndArray[0].price * my2ndArray[0].quantity) > (my2ndArray[1].price * my2ndArray[1].quantity);
console.log("Ch#5 result : " + result2); // true




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