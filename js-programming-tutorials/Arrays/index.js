// Introduction to JavaScript Event Listeners - Tutorial taken from https://youtu.be/EaRrmOtPYTM

// object.addEventListener(event, function)

let btn = document.getElementById("btn");
let lnk = document.getElementById("lnk");
let txt = document.getElementById("txt");

btn.addEventListener("click", buttonClicked);
function buttonClicked(ev) {
    console.log(ev.type, ev.target, ev.currentTarget);
}

lnk.addEventListener("click", linkClicked);
function linkClicked(ev) {
    ev.preventDefault(); // disable hyperlink
    console.log(ev.type, ev.target, ev.currentTarget);
}

/* myDiv.addEventListener("click", doSomething);

function doSomething(event) {
    console.log(event.type); //click
    console.log(event.target);
    return 7;
} */