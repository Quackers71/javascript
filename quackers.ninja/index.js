window.onload = init;

function init() {
    var image = document.getElementById("goober");
    image.onclick = showAnswer;
}

function showAnswer() {
    var image = document.getElementById("goober");
    image.src = "./images/myGoober.jpg";
}