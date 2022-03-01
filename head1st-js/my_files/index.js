window.onload = init;

function init() {
  var image = document.getElementById("goober");
  image.onpointerover = showAnswer;
}

function showAnswer() {
  var image = document.getElementById("goober");
  image.src = "images/goober.jpg";

  setTimeout(revertAnswer, 2000);
}

function revertAnswer() {
  var image = document.getElementById("goober");
  image.src = "images/goobershakey.jpg";
}

// Main stuff for Pg. 47#
