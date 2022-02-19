var newItemCounter = 1;
var theList = document.getElementById("itemList");
var addItem = document.getElementById("addItemButton");
var deleteItem = document.getElementById("removeItemButton");
var newHeader = document.getElementById("mainTitle");
// var listItems = document.getElementById("mainList").getElementsByTagName("li");
var listItems = document.querySelectorAll("#itemList li");
var removeLastItem = document.querySelectorAll("#itemList li");

newHeader.innerHTML = "The List Items";
newHeader.style.color = "sandybrown";
theList.style.color = "white";

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}

function activateItem() {
    newHeader.innerHTML = this.innerHTML;
}

addItem.addEventListener("click", createNewItem);
deleteItem.addEventListener("click", deleteLastItem);

function createNewItem() {
    theList.innerHTML += "<li>New Item "+newItemCounter+"</li>";
    console.log(newItemCounter);
    newItemCounter++;
}

function deleteLastItem() {
    console.log(newItemCounter);
    // removeLastItem.parentNode.removeChild(removeLastItem);
    console.log(removeLastItem[newItemCounter]);
    console.log(newItemCounter);
    --newItemCounter;
}