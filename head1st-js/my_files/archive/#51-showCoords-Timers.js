window.onload = init;

function init() {
  var image = document.getElementById("goober");
  image.onpointerover = showAnswer;

  var map = document.getElementById("map");
  map.onmousemove = showCoords;

  setTimeout(timerHandler, 5000);
  setInterval(ticker, 1000);
}

function showAnswer(eventObj) {
  var image = (document.getElementById("goober").src = "./images/goober.jpg");
}

function showCoords(eventObj) {
  var map = document.getElementById("coords");
  var x = eventObj.clientX;
  var y = eventObj.clientY;
  map.innerHTML = "Map coordinates: " + x + ", " + y;
}

function timerHandler() {
  alert("Yo, what are you doing just sitting there staring at a blank screen?");
}

var tick = true;
function ticker() {
  if (tick) {
    console.log("Tick");
    tick = false;
  } else {
    console.log("Tock");
    tick = true;
  }
}
