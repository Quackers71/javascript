var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];


var solution2 = scores[2];
console.log("Solution 2 produced " + solution2 + " bubbles.");

var wholeScoresArray = scores;
console.log(wholeScoresArray);

var flavours = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];


var flavourOfTheDay = flavours[1];
console.log("Flavour of the day is : " + flavourOfTheDay);

var wholeFlavoursArray = flavours;
console.log(wholeFlavoursArray);
var numberOfFlavours = flavours.length;
numOfFlavs(numberOfFlavours);
lastItem(wholeFlavoursArray);

flavours[3] = "vanilla chocolate chip";
flavours[5] = "mint chocolate";
flavours[6] = "strawberry peach";
flavours[7] = "raspberry";
console.log(wholeFlavoursArray);
numberOfFlavours = flavours.length;
numOfFlavs(numberOfFlavours);
lastItem(wholeFlavoursArray);

function numOfFlavs(num) {
    console.log("There are " + numberOfFlavours + " Flavours");
}

function lastItem(last) {
    var recent = flavours.slice(-1)[0];
    console.log("The last flavour is : " + recent);
}

var last = flavours.length - 1;
var recent = flavours[last];
console.log(recent);
