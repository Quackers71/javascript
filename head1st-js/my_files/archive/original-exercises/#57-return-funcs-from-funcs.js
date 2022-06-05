window.onload = init;

function init() {
  var image = document.getElementById("goober");
  image.onpointerover = showAnswer;

  // calling the servePassengers function
  servePassengers(passengers);
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

// Main stuff for Pg. 450 Updating the Passengers

var passengers = [
  { name: "Jane Doloop", paid: true, ticket: "coach" },
  { name: "John Funcall", paid: true, ticket: "coach" },
  { name: "The Pebble", paid: false, ticket: "first" },
  { name: "Donkey", paid: false, ticket: "premium economy" },
  { name: "Mapimpy", paid: true, ticket: "premium economy" },
  { name: "Scarls", paid: true, ticket: "first" },
];

// iterating through the passengers calling the serveCustomer function
// and outputs the name, ticket class and available orders available depending on class.
function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    console.log(
      passengers[i].name + " is in " + passengers[i].ticket + " class"
    );
    serveCustomer(passengers[i]);
  }
}

// returns a function from the createDrinkOrder function and stores it in getDrinkOrderFunction
function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  var getDinnerOrderFunction = createDinnerOrder(passenger);
  var movieOfTheWeek = presentedMovie(passenger);
  getDrinkOrderFunction();
  getDinnerOrderFunction();
  movieOfTheWeek();
  // show movie
  // pick up trash
}

// returns a function on a conditional check and stores it in orderFunction
function createDrinkOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "first") {
    orderFunction = function () {
      console.log("Would you like a Cocktail or Wine?");
    };
  } else if (passenger.ticket === "premium economy") {
    orderFunction = function () {
      console.log("Would you like Wine, Cola or Water?");
    };
  } else if (passenger.ticket === "coach") {
    orderFunction = function () {
      console.log("Would you like Cola or Water?");
    };
  }
  return orderFunction;
}

// again returns a function on a conditional check and stores it in orderFunction
function createDinnerOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "first") {
    orderFunction = function () {
      console.log("Would you like Chicken or Pasta?");
    };
  } else if (passenger.ticket === "premium economy") {
    orderFunction = function () {
      console.log("Would you like Snack Box or Cheese plate?");
    };
  } else if (passenger.ticket === "coach") {
    orderFunction = function () {
      console.log("Would you like Peanutes or Pretzels?");
    };
  }
  return orderFunction;
}

function presentedMovie(passenger) {
  var movieFunction;

  movieFunction = function () {
    console.log("Todays Movie is 'No Time to Die 007'");
  };
  return movieFunction;
}
