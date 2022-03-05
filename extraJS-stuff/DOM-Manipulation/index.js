// DOM Manipulation taken from https://youtu.be/y17RuWkWdn8

document.body.style.backgroundColor = "#222";
document.body.style.color = "white";

const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

spanBye.remove();
div.append(spanBye);
// div.removeChild(spanHi);

console.log(spanHi.getAttribute("title"));
spanHi.setAttribute("id", "helllloooo");
spanHi.removeAttribute("title");
spanHi.id = "hi";

spanBye.dataset.newName = "Byeden";
console.log(spanBye.dataset);
console.log(spanBye.dataset.longerName);

spanHi.classList.add("new-class");
spanHi.classList.remove("hi1");
spanHi.classList.toggle("hi3", true);
spanHi.style.backgroundColor = "green";
spanHi.style.color = "black";

spanBye.style.backgroundColor = "blue";

/* const body = document.body;
body.append("Hello World");

const div = document.createElement("div");
// div.innerText = "Yo Yo Sicko!";
div.innerHTML = "<strong>Yo Yo Sicko!</strong>";
div.style.color = "green";
body.append(div);

const strong = document.createElement("strong");
strong.innerText = "\nHello World 2";
div.append(strong); */

/* const div2 = document.querySelector("div");
console.log(div2.textContent);
console.log(div2.innerText); */
