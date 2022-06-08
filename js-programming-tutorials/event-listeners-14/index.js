// Event Listeners - Javascript - Tutorial 14 taken from https://youtu.be/jrI0WFCCLWY

document.write("<h2>using JavaScript</h2>");

function handleClick(element) {
    element.style = "background-color: blue;";
}

const image = document.getElementById("image");
image.addEventListener("mouseover", function() {
    this.style = "box-shadow: 15px 15px 15px 15px #111";
    this.width = "450";
});

image.addEventListener("mouseout", function() {
    this.style = "";
    this.width = "250";
});