window.onload = init;

function init() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].onpointerover = showAnswer;
  }

  for (var j = 0; j < images.length; j++) {
    images[j].onpointerleave = revertAnswer;
  }

  var winner = function () {
    console.log("WINNER!");
  };
  var loser = function () {
    console.log("LOSER!");
  };

  var a = winner;
  var b = loser;
  var c = loser;

  a(); // WINNER!
  b(); // LOSER!

  c = a; // winner
  console.log(c);
  a = b; // loser
  console.log(a);
  b = c; // winner
  console.log(b);
  c = a; // loser
  console.log(c);
  a = c; // loser
  console.log(a);
  a = b; // winner - which makes a(); at the end output "WINNER!"
  console.log(a);
  b = c; // loser
  console.log(b);
  a(); // WINNER!
}

function showAnswer(eventObj) {
  var image = eventObj.target;

  var name = image.id;
  name += ".jpg";
  image.src = "images/" + name;

  setTimeout(revertAnswer, 2000, eventObj);
}

function revertAnswer(eventObj) {
  var image = eventObj.target;

  var name = image.id;
  name += "blur.jpg";
  image.src = "images/" + name;
}
