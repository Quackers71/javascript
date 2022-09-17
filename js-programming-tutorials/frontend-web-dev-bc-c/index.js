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
// https://www.codewars.com/kata/5545f109004975ea66000086/javascript @ 04:31:18

function isDivisible(n, x, y) {
  const result1 = n / x;
  const result2 = n / y;

  if (result1 % 1 === 0 && result2 % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(3, 3, 3));

// another solution
function isDivisible2(n, x, y) {
  return (n % x === 0 && n % y === 0) ? true : false;
}
console.log(isDivisible2(2, 3, 3));

// Ch #8 - Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102/javascript

function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}
console.log(makeNegative(5));

// possibly the best solution
function makeNegative2(num) {
  return -Math.abs(num);
}
console.log(makeNegative2(180));

// Ch #9 - Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/javascript @ 04:43:53

class SmallestIntegerFinder {
  findSmallestInt(arrayOfNums) {
    let smallestNum;

    for (let i = 0; i < arrayOfNums.length; i++) {
      const arrayNum = arrayOfNums[i];

      if (i === 0) {
        smallestNum = arrayNum;
      }

      if (arrayNum < smallestNum) {
        smallestNum = arrayNum;
      }
    }

    return smallestNum;
  }
}
let myClass = new SmallestIntegerFinder();
console.log(myClass.findSmallestInt([12, 20, 6, -9])); // -9

// Ch #10 - Grasshopper - Summation
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/javascript @ 04:53:01

var summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i; // same as sum = sum + i;
  }

  return sum;
}
console.log(summation(8));

// Ch #11 - Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript

function getAverage(scoreArray) {
  const count = scoreArray.length;
  let sum = 0;

  for (let i = 0; i < count; i++) {
    sum += scoreArray[i];
  }

  const avg = sum / count;
  const roundedDown = Math.floor(avg);

  return roundedDown;
}
console.log(getAverage([1, 2, 3, 4, 5, 6]));

// simplified version
function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

// Ch #12 - Rock Paper Scissors!
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/javascript @ 05:05:46

const rockPaperScissors = (player1, player2) => {
  if (player1 === 'rock') {
    if (player2 === 'rock') {
      return 'Draw!';
    }
    if (player2 === 'paper') {
      return 'Player 2 won!';
    }
    if (player2 === 'scissors') {
      return 'Player 1 won!';
    }
  }

  if (player1 === 'paper') {
    if (player2 === 'rock') {
      return 'Player 1 won!';
    }
    if (player2 === 'paper') {
      return 'Draw!';
    }
    if (player2 === 'scissors') {
      return 'Player 2 won!';
    }
  }

  if (player1 === 'scissors') {
    if (player2 === 'rock') {
      return 'Player 2 won!';
    }
    if (player2 === 'paper') {
      return 'Player 1 won!';
    }
    if (player2 === 'scissors') {
      return 'Draw!';
    }
  }
};
console.log("My version : " + rockPaperScissors('rock', 'scissors'));

// Sudo code - Possibilities
/*
    Rock = r
    Paper = p
    Scissors = s

    Player 1      Player 2       Result
       r             r            Draw
       r             p             p2
       r             s             p1
       p             r             p1
       p             p            Draw
       p             s             p2
       s             r             p2
       s             p             p1
       s             s            Draw
*/

// A compressed version
const rps = (p1, p2) => {
  if (p1 == p2)
    return 'Draw!';

   if (p1 == 'rock' && p2 == 'scissors')
     return 'Player 1 won!'
   else if (p1 == 'scissors' && p2 == 'paper')
     return 'Player 1 won!'
   else if (p1 == 'paper' && p2 == 'rock')
     return 'Player 1 won!'
   else
     return 'Player 2 won!';
};
console.log("Alt version : " + rps('paper', 'scissors'));

// Ch #13 - Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/javascript

// my attempt
function removeChar(str){
  const result = str.slice(1, -1);
  return result;
  // Should have used this
  // return str.slice(1, -1);

};
console.log(removeChar("*wonkey*"));

// Zach's attempt
function removeChar(str){
  const lengthOfString = str.length;
  return str.substr(1, lengthOfString - 2);
};
console.log(removeChar("*donkey*"));

// Ch #14 - Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript @ 05:20:34

function positiveSum(arr) {
  
}



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