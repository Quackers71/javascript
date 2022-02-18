var newHeader = document.getElementById("todo");
// var listItems = document.getElementById("mainList").getElementsByTagName("li");
var listItems = document.querySelectorAll("#mainList li");

newHeader.innerHTML = "To Do List";
newHeader.style.color = "purple";

listItems[0].innerHTML = "Yes 1";

for (var i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = "Ammendment "+(i+1);
}

var element = document.getElementById("button");
var listener = element.addEventListener("click", function(e) {
    console.log("clicked");
});

