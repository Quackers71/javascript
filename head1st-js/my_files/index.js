var points = 0;
function playTurn(player, location) {
    points = 0; // < No declaration
    if (location == 1) {
        points = points + 100;
    }
    return points;
}

var total = playTurn("Jai", 1);
console.log("points : " + points);
console.log("total  : " + total);

// By NOT declaring 'points' within the function, this makes it global.
// If you use the same name as in this example you might overwrite a value.
