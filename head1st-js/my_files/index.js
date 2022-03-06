// DOM Traversal taken from https://youtu.be/v7rSSy8CaYE

//const grandparent = document.getElementById("grandparent-id");
// const grandparent = document.querySelector("#grandparent-id");
// const grandparent = document.querySelector(".grandparent");
// const parents = Array.from(document.getElementsByClassName("parent"));
// const parent = document.querySelector(".parent");
// const parents = document.querySelectorAll(".parent");
/* const children = document.querySelectorAll(".child");

children.forEach(changeColor); */

/* const parents = Array.from(grandparent.children);
const parentOne = parents[0];
const parentTwo = parents[1];
const children = parentOne.children;
const childrenTwo = parentTwo.children; */

const childOne = document.querySelector("#child-one");
// const parent = childOne.parentElement;
const childTwo = childOne.nextElementSibling;
// const grandparent = childOne.closest(".grandparent");

changeColor(childTwo);

// changeColor(children[0]);
// changeColor(childrenTwo[1]);
// changeColor(childOne);

// changeColor(parent);
// parents.forEach(changeColor);

// grandparent.style.backgroundColor = "#333";
// changeColor(grandparent);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
