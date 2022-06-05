window.onload = init;

function init() {

    setTimeout(timerHandler, 5000);

    var map = document.getElementById("map");
    map.onmousemove = showCoords;
}

function showCoords(eventObj) {
    var map = document.getElementById("coords");
    var x = eventObj.clientX;
    var y = eventObj.clientY;
    map.innerHTML = "Map coordinates: " + x + ", " + y;
}

function timerHandler() {
    alert("Hey what are you doing just sitting there staring at a blank screen?");
   }