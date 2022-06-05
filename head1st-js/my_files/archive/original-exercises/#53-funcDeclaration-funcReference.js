window.onload = init;

function init() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].onpointerover = showAnswer;
  }

  for (var j = 0; j < images.length; j++) {
    images[j].onpointerleave = revertAnswer;
  }

  var migrating = true;

  if (migrating) {
    quack(4);
    fly(4);
  }
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

var fly = function (num) {
  for (var i = 0; i < num; i++) {
    console.log("Flying!");
  }
};

function quack(num) {
  for (var i = 0; i < num; i++) {
    console.log("Quack!");
  }
}
