window.onload = init;

function init() {
  var image = document.getElementById("goober");
  image.onpointerover = showAnswer;
}

function showAnswer() {
  var image = document.getElementById("goober");
  image.src = "images/goober.jpg";

  setTimeout(revertAnswer, 2000);
}

function revertAnswer() {
  var image = document.getElementById("goober");
  image.src = "images/gooberblur.jpg";
}

// Main stuff for Pg. 443 Flying First Class

var passengers = [
  { name: "Jane Doloop", paid: true, medicalCondition: false },
  { name: "Dr. Evel", paid: true, medicalCondition: false },
  { name: "Sue Property", paid: false, medicalCcondition: false },
  { name: "John Funcall", paid: true, medicalCondition: false },
  { name: "The Pebble", paid: false, medicalCondition: true },
  { name: "Donkey", paid: false, medicalCondition: false },
  { name: "Mapimpy", paid: true, medicalCondition: false },
  { name: "Scarls", paid: true, medicalCondition: false },
];

// Function declaration to print the full list of paid and  unpaid passengers
function printPassenger(passenger) {
  var message = passenger.name;
  if (passenger.paid === true) {
    message = message + " has paid";
  } else {
    message = message + " has not paid";
  }
  console.log(message);
  return false;
}

// function call - without this, nothing executes in the console
processPassengers(passengers, printPassenger);

// reference to a function with returned parameter from the function checkNoFlyList
var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log(
    allCanFly +
      " returned - The plane can't take off: we have a passenger on the no-fly-list."
  );
}

// reference to a function with returned parameter from the function checkNotPaid - processPassengers is called again, passing in
// the checkNotPaid function as a parameter and then re-iterated through to check each passenger...
var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log(
    allPaid + " returned - The plane can't take off: not everyone has paid."
  );
}

// added this reference to a function - however, set all passengers to : false
var hasMedicalCondition = processPassengers(passengers, checkMedicalCondtion);
if (!hasMedicalCondition) {
  console.log(
    hasMedicalCondition +
      " returned - The plane can't take off: we have a passenger with a medical condition!"
  );
}

// function declaration to iterate through the passenger list and also run testFunction( as a parameter in this case) against each passenger
function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

// returns "Dr. Evel" which is passed into the reference to the function above 'allCanFly'
function checkNoFlyList(passenger) {
  return passenger.name === "Dr. Evel";
}

// returns whether a passenger has not paid and passed into the reference to the function above 'allPaid'
function checkNotPaid(passenger) {
  return !passenger.paid;
}

// returns whether a person has a medical condition and into reference 'hasMedicalCondition'
function checkMedicalCondtion(passenger) {
  return passenger.medicalCondition;
}

/* function sayIt(translator) {
  var phrase = translator("Goodbye");
  console.log(phrase);
}
function hawaiianTranslator(word) {
  if (word === "Hello") return "Aloha";
  if (word === "Goodbye") return "Aloha";
}
sayIt(hawaiianTranslator); */
