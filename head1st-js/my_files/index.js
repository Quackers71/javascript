window.onload = init;

function init() {
    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++ ) {
        images[i].onpointerover = showImage;
    }
    for (var j = 0; j < images.length; j++) {
        images[j].onpointerleave = unShowImage;
    }
}

function showImage(eventObj) {
    var image = eventObj.target;

    var name = image.id;
    name += ".jpg";
    image.src = "./images/" + name;

  }

function unShowImage(eventObj) {
    var image = eventObj.target;

    var name = image.id;
    name += "blur.jpg";
    image.src = "./images/" + name;
}