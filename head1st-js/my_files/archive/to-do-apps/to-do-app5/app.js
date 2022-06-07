// To Do List taken from https://youtu.be/-pRg_daFjfk

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function(event) {

    event.preventDefault();

    if (!inputField.value) {
        alert("Please enter something!");
        return;
    }

    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);

    /* var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    toDoContainer.appendChild(checkbox); */

    inputField.value = "";
    inputField.focus();

    paragraph.addEventListener("click", function() {
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function() {
        toDoContainer.removeChild(paragraph);
    });
});