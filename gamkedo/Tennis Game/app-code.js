var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 15;
var ballSpeedY = 4;

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
    ballY += ballSpeedY;
    if(ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballX > canvas.width - 5) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
    if(ballY > canvas.height - 5) {
        ballSpeedY = -ballSpeedY;
    }
}

function drawEverything() {

    // blanks out the screen black
    colourRect(0,0,canvas.width, canvas.height,'black');

    // left player paddle
    colourRect(0,210,10,100,'white');

    // draws the ball
    colourCircle(ballX, ballY, 10, 'white');
}

function colourCircle(centreX, centreY, radius, drawColour) {
    canvasContext.fillStyle = drawColour;
    canvasContext.beginPath();
    canvasContext.arc(centreX, centreY, radius, 0, Math.PI*2, true); // (x, y, radius, angles, radians, true)
    canvasContext.fill();
}

function colourRect(leftX,topY, width, height, drawColour) {
    canvasContext.fillStyle = drawColour;
    canvasContext.fillRect(leftX,topY,width,height);
}