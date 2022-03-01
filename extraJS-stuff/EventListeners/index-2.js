// JS Event Listeners taken from https://youtu.be/XF1_MlZ5l6M

// This was the 1st Event Handler
/* const divs = document.querySelectorAll("div");
divs.forEach((div) => {
  div.addEventListener("click", (e) => {
    console.log("Hi");
  });
}); */

// This was the 2nd Event Handler, however this can be done better, see below
/* document.addEventListener("click", (e) => {
  if (e.target.matches("div")) {
    console.log("Hi");
  }
}); */

// Function Call
addGlobalEventListener("click", "div", (e) => {
  console.log("Hi");
});

// A re-usable function
function addGlobalEventListener(type, id, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(id)) callback(e);
  });
}

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
newDiv.className = "grandparent3";

// You need to add this afterwards
/* newDiv.addEventListener("click", () => {
  console.log("Hi");
}); */

document.body.append(newDiv);
