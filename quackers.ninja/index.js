window.onload = init;

function init() {
  var image = document.getElementById("goober");
  image.onclick = showAnswer;
  image.ondblclick = revertAnswer;
}

function showAnswer() {
  var image = document.getElementById("goober");
  image.src = "./images/myGoober.jpg";
}

function revertAnswer() {
  var image = document.getElementById("goober");
  image.src = "./images/myGooberShakey.jpg";
}
