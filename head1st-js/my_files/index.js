function doIt(param) {
    param = 2;
}

var test = 1;
doIt(test);
console.log(test);
// alert(test);

function dogYears(dogName, age) {
    var years = age * 7;
    console.log(dogName + " is " + years + " years old");
}

var myDog = "Fido";
dogYears(myDog, 4);

function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of " + tea);
}

var guests = 3;
makeTea(guests, "Earl Grey");

function secret() {
    console.log("The secret of life is 42...");
}

secret();

function speak(kind) {
    var defaultSound = "";
    if (kind == "dog") {
        alert("Woof");
    } else if (kind == "cat") {
        alert("Meow");
    } else {
        alert(defaultSound);
    }
}

var pet = prompt("Enter a type of pet: ");
speak(pet);