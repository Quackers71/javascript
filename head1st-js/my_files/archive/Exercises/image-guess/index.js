window.onload = init;

function init() {

    addMainImages();

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
    image.src = "./../../../images/" + name;

  }

function unShowImage(eventObj) {
    var image = eventObj.target;

    var name = image.id;
    name += "blur.jpg";
    image.src = "./../../../images/" + name;
}

function addMainImages() {

    var img = document.createElement("img");
    img.src = "./../../../images/zeroblur.jpg";
    img.id = "zero"
    document.body.appendChild(img);

    var img = document.createElement("img");
    img.id = "one"
    img.src = "./../../../images/oneblur.jpg";
    document.body.appendChild(img);

    var img = document.createElement("img");
    img.src = "./../../../images/twoblur.jpg";
    img.id = "two"
    document.body.appendChild(img);

    var img = document.createElement("img");
    img.id = "three"
    img.src = "./../../../images/threeblur.jpg";
    document.body.appendChild(img);

    var img = document.createElement("img");
    img.id = "four"
    img.src = "./../../../images/fourblur.jpg";
    document.body.appendChild(img);

    var img = document.createElement("img");
    img.id = "five"
    img.src = "./../../../images/fiveblur.jpg";
    document.body.appendChild(img);
}