// JS Event Listeners taken from https://youtu.be/XF1_MlZ5l6M

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", (e) => {
  console.log("Grandparent");
  e.stopPropagation();
});

parent.addEventListener("click", (e) => {
  console.log("Parent");
  e.stopPropagation();
});

// printChild function required for the removeEventListener to work!
// and will be removed after 2 seconds
child.addEventListener("click", printChild);
setTimeout(() => {
  child.removeEventListener("click", printChild);
}, 2000);

function printChild(e) {
  console.log("ChildFunction");
  e.stopPropagation();
}

// One time only
document.addEventListener(
  "click",
  (e) => {
    console.log("Document");
    e.stopPropagation();
  },
  { once: true }
);
