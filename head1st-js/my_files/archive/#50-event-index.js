window.onload = init;

function init() {
    var images = document.getElementsByTagName("img");;
    for (var i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
    console.log(images[i]);
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target;

    var name = image.id;
    name += ".jpg";
    image.src = "./images/" + name;
}