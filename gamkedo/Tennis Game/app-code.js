var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 15;
var ballSpeedY = 4;

var paddle1Y = 250;
const PADDLE_HEIGHT = 100;

function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
    };
}

window.onload = function() {

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond); // 1000 is millisecond = 1 second

    canvas.addEventListener('mousemove',
        function(evt) {
            var mousePos = calculateMousePos(evt);
            paddle1Y = mousePos.y - (PADDLE_HEIGHT/2);
        });
}

function ballReset() {
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width/2;
    ballY = canvas.height/2;
}

function moveEverything(){
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballX < 0) {
        if(ballY > paddle1Y && ballY < paddle1Y+PADDLE_HEIGHT) {
                ballSpeedX = -ballSpeedX;
        }
        else {
            ballReset();
        }
    }
    if(ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
    if(ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
}

function drawEverything() {

    // blanks out the screen black
    colourRect(0,0,canvas.width, canvas.height,'black');

    // left player paddle
    colourRect(0,paddle1Y,10,PADDLE_HEIGHT,'white');

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