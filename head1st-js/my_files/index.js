var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54,
 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];


function outputScores(list) {
   var index = scores.length;
   for (var i = 0; i < index; i++) {
       console.log("Bubble solution #" + i + "   score: " + scores[i]);
   }
}

outputScores(scores);

console.log("Bubbles tests: " + scores.length);

console.log("Highest Bubble score : " + Math.max.apply(null, scores));

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

console.log("Solution with highest score : #" + indexOfMax(scores));
