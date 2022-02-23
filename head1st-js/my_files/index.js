window.onload = init;
// window.onresize = resize;

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

function resize() {
  var element = document.getElementById("display");
  element.innerHTML = element.innerHTML + " that tickles!";
}
