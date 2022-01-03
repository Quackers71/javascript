var avatar = "generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar(points) {
    var level = points / pointsPerLevel;
    if (level == 0) {
        return "Teddy bear";
    } else if (level == 1) {
        return "Cat";
    } else if (level >= 2) {
        return "Gorilla";
    }
}

function updatePoints(bonus, newPoints) {
    var i = 0;
    console.log("Bonus Arg : " + bonus);
    console.log("New Points Arg : " + newPoints);
    while (i < bonus) {
        console.log("\nloop number : " + (i+1));
        newPoints = newPoints + skill * bonus;
        console.log("newPoints : " + newPoints);
        console.log("skill : " + skill);
        console.log("bonus : " + bonus);
        i = i + 1;
    }
    return newPoints + userPoints;
}

console.log("Original Points : " + userPoints);
userPoints = updatePoints(2, 100);
console.log("\nUser Points : " + userPoints);
avatar = getAvatar(2112);
console.log("Avatar : " + avatar);
