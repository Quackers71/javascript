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

// Main stuff for Pg. 449 Variable Fun

function fun(echo) {
  console.log(echo);
}

fun("Hello"); // Hello

function boo(aFunction) {
  aFunction("boo");
}

boo(fun); // boo

console.log(fun); // function fun(echo)

fun(boo); // function boo(aFunction)

var moreFun = fun;
moreFun("Hello again"); // Hello again

function echoMaker() {
  return fun;
}

var bigFun = echoMaker();
bigFun("Is there an echo?"); // Is there an echo?
