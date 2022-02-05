function lieDetectorTest() {
    var lies = 0;
    var stolenDiamond = { };
    if (stolenDiamond) {
    console.log("You stole the diamond");
    lies++;
    }
    var car = {
    keysInPocket: null
    };
    if (car.keysInPocket) {
    console.log("Uh oh, guess you stole the car!");
    lies++;
    }
    if (car.emptyGasTank) {
    console.log("You drove the car after you stole it!");
    lies++;
    }
    var foundYouAtTheCrimeScene = [ ];
    if (foundYouAtTheCrimeScene) {
    console.log("A sure sign of guilt");
    lies++;
    }
    if (foundYouAtTheCrimeScene[0]) {
    console.log("Caught with a stolen item!");
    lies++;
    }
    var yourName = " ";
    if (yourName) {
    console.log("Guess you lied about your name");
    lies++;
    }
    return lies;
   }
   var numberOfLies = lieDetectorTest();
   console.log("You told " + numberOfLies + " lies!");
   if (numberOfLies >= 3) {
    console.log("Guilty as charged");
}

// Output
/* 
You stole the diamond
A sure sign of guilt
Guess you lied about your name
You told 3 lies!
Guilty as charged
*/
