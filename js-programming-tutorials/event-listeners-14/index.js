// Event Listeners - Javascript - Tutorial 14 taken from https://youtu.be/jrI0WFCCLWY
// @ 9:17 of 13:54

function handleClick(element) {
    element.style = "background-color: blue";
}

var image = document.getElementById("image");
image.addEventListener("mouseover", function() {
    this.style = "box-shadow: 2px 2px 2px white";
    this.width = "300";
});
