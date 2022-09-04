// Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS) via https://www.youtube.com/watch?v=zJSY8tbf_ys @ 56:00 / 21:14:41

// JavaScript variables / objects / arrays & functions

const myArray = [10, 20, 30, 40];

myArray.push(50);
console.log(myArray);
console.log("Array Length : " + myArray.length);
console.log(myArray.reverse());

const yourVariable = { firstProperty: 'Hello World!'};
console.log(yourVariable);

const anotherArray = [10, 'a string', { property: 'quackers' }, [1, 2, 3]]; // nested array
console.log(anotherArray);
console.log("[3][0] : " + anotherArray[3][0]);

const objectVariable = { prop1: 20, prop2: 'Hello', prop3: 'World' };
console.log("objVar.prop2 + objVar.prop3 : " + objectVariable.prop2 + " " + objectVariable.prop3 + "!");
console.log("objVar['prop1'] : " + objectVariable['prop1']);

const nestedObject = {
    layer1: {
        layer2: {
            layer3: {
                targetValue: 20
            }
        }
    }
}
console.log("4 layers nested value : " + nestedObject.layer1.layer2.layer3.targetValue);

const functionContainerVariable = function() {
    return 20;
}
console.log("fCV returns : " + functionContainerVariable());




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