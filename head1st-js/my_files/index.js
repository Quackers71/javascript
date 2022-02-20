window.onload = init;

function init() {
    var image = document.getElementById("zero");
    image.onclick = showAnswer;
}

function showAnswer() {
    var image = document.getElementById("zero").src="./images/zero.jpg";
    // image.src = "./images/zero.jpg"; < original 
    // image.setAttribute("src", "./images/zero.jpg"); < or you could use this
}