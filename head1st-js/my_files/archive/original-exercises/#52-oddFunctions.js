window.onload = function () {
  alert("The page is loaded!");
  init();
  six = addOne(5);
  console.log(six);
};
// window.onload = init;

function init() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].onpointerover = showAnswer;
  }

  for (var j = 0; j < images.length; j++) {
    images[j].onpointerleave = revertAnswer;
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

var addOne = function (x) {
  return x + 1;
};
