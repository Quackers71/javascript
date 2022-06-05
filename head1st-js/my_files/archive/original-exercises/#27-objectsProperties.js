var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    transmission: "Auto",
    registration: "0MG"
};

var cadi = {
    make: "General Motors",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    transmission: "Auto",
    registration: "D00M3R"
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    transmission: "Manual",
    registration: "N99WEB"
};

var miles = fiat.mileage;
var colors = fiat.color;
if (miles > 2000 || colors == "Med Blue") {
    console.log(JSON.stringify(fiat, null, 2));
}

fiat.mileage = 10000;
fiat.needsWashing = true;

console.log("mileage Changed");
console.log("needsWashing added");
console.table(fiat);

if (fiat.year < 1965) {
    console.log("This " + fiat.make + " " + fiat.model + ", is a Classic Car...");
    classic = true;
}

var people = fiat.passengers;
for (var i = 0; i < people; i++) {
    console.log("Yo!");
    addPersonToCar = true;
}
console.log("There are " + people + " people in this car.");

if (people == i) {
    console.log("were " + people + " people were added to this car? = " + addPersonToCar);
}
