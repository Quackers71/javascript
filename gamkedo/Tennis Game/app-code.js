var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 15;
var ballSpeedY = 4;

var player1Score = 0;
var player2Score = 0;
const WINNING_SCORE = 3;

var showingWinScreen = false;

var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;

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
    if(player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
        player1Score = 0;
        player2Score = 0;
        showingWinScreen = true;
    }

    ballSpeedX = -ballSpeedX;
    ballX = canvas.width/2;
    ballY = canvas.height/2;
}

function computerMovement() {
    var paddle2YCentre = paddle2Y + (PADDLE_HEIGHT/2);
    if(paddle2Y < ballY-35) {
        paddle2Y += 6;
    }
    else if(paddle2YCentre > ballY+35) {
        paddle2Y -= 6;
    }
}

function moveEverything(){
    if (showingWinScreen) {
        return;
    }

    computerMovement();

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballX < 0) {
        if(ballY > paddle1Y && ballY < paddle1Y+PADDLE_HEIGHT) {
                ballSpeedX = -ballSpeedX;
                
                var deltaY = ballY -(paddle1Y+PADDLE_HEIGHT/2);
                ballSpeedY = deltaY * 0.35;
        }
        else {
            player2Score++; // must be BEFORE ballReset()
            ballReset();
            
        }
    }
    if(ballX > canvas.width) {
        if(ballY > paddle2Y && ballY < paddle2Y+PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;

            var deltaY = ballY -(paddle2Y+PADDLE_HEIGHT/2);
                ballSpeedY = deltaY * 0.35;
        }
        else {
            player1Score++; // must be BEFORE ballReset()
            ballReset();
            
        }
    
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

    if (showingWinScreen) {
        canvasContext.fillStyle = "white";
        canvasContext.fillText("click to continue...", 100, 100);
        return;
    }

    // left player paddle
    colourRect(0,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');

    // right player paddle
    colourRect(canvas.width-10,paddle2Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'white');

    // draws the ball
    colourCircle(ballX, ballY, 10, 'white');

    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score, canvas.width-100, 100);
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