// A very basic To Do List App taken from https://youtu.be/8ogdhvxShe0

function todoList() {
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("todoList").appendChild(newItem);
}