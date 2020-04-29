var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 15;

window.onload = function() {

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond); // 1000 is millisecond = 1 second
}

function moveEverything(){
    ballX += ballSpeedX;
    if(ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballX > canvas.width - 5) {
        ballSpeedX = -ballSpeedX;
    }
}

function drawEverything() {
    colourRect(0,0,canvas.width, canvas.height,'black'); // blanks out the screen black
    colourRect(0,210,10,100,'white');
    colourRect(ballX,100,10,10,'red');
}

function colourRect(leftX,topY, width, height, drawColour) {
    canvasContext.fillStyle = drawColour;
    canvasContext.fillRect(leftX,topY,width,height);
}