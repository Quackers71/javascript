window.onload = init;

function init() {
  var image = document.getElementById("goober");
  image.onpointerover = showAnswer;
}

function showAnswer() {
  var image = document.getElementById("goober");
  image.src = "images/goober.jpg";

  setTimeout(revertAnswer, 2000);
}

function revertAnswer() {
  var image = document.getElementById("goober");
  image.src = "images/gooberblur.jpg";
}

// Main stuff for Pg. 457 Webville Cola

var products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];

// console.table(products);

function compareSold(product1, product2) {
  // codings here
}

// Simple Example
var numbersArray = [60, 50, 62, 58, 54, 54];

function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return -1;
  }
}
console.log("Numbers unsorted : " + numbersArray);

numbersArray.sort(compareNumbers);

console.log("Numbers sorted   : " + numbersArray);
