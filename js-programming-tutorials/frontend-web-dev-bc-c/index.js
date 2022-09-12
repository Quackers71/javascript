// Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS) via https://www.youtube.com/watch?v=zJSY8tbf_ys @ 02:50:09 / 21:14:41

// 25 Beginner JavaScript practive problems

// https://www.codewars.com/collections/lesson-5-practice-challenges-number-fullstackroadmap

// codewars challenge #2 - https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
// Reversed Strings
let str = "world";
console.log(str);
let arr = str.split("");
console.log(arr);
let reversed = arr.reverse();
console.log(reversed);
result = reversed.join("");
console.log(result);

//the answer
function solution(str){
  return str.split("").reverse().join("");
}
console.log("reversed string : " + solution("world"));


// Ch #3 - Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/javascript
function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log("Result : " + even_or_odd(40));

// Ch #5 - Vowel Count
//  https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript
function getCount(str) {
  let vowelsCount = 0;

  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'a':
        vowelsCount++;
        break;
      case 'a':
        vowelsCount++;
        break;
      case 'e':
        vowelsCount++;
        break;
      case 'i':
        vowelsCount++;
        break;
      case 'o':
        vowelsCount++;
        break;
      case 'u':
        vowelsCount++;
    }
  }  
  return vowelsCount;
}
console.log("vowels count : " + getCount("asdopuioiuweoueo"));

// Ch #6 - Jenny's secret message
// https://www.codewars.com/kata/55225023e1be1ec8bc000390/javascript
function greet(name){
  if (name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}
console.log(greet("Bob"));

// Ch #7 - Is n divisible by x and y?
// https://www.codewars.com/kata/5545f109004975ea66000086/javascript





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