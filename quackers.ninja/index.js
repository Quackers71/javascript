window.onload = init;

function init() {
  var image = document.getElementById("goober");
  image.onpointerover = showAnswer;
  image.onpointerleave = revertAnswer;
}

function showAnswer() {
  var image = document.getElementById("goober");
  image.src = "./images/myGoober.jpg";
}

function revertAnswer() {
  var image = document.getElementById("goober");
  image.src = "./images/myGooberShakey.jpg";
}
