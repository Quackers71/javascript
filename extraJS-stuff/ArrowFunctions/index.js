// JS Arrow Functions taken from https://youtu.be/h33Srr5J9nY

function sum(a, b) {
  return a + b;
}

let sum2 = (a, b) => {
  return a + b;
};

let sum3 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

let isPositive2 = (number) => number >= 0;

function randomNumber() {
  return Math.random;
}

let randomNumber2 = () => Math.random;

document.addEventListener("click", function () {
  console.log("Click");
});

document.addEventListener("click", () => {
  console.log("Click");
});
