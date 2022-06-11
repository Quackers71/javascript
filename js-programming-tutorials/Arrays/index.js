// Introduction to JavaScript Event Listeners - Tutorial taken from https://youtu.be/EaRrmOtPYTM

// object.addEventListener(event, function)

let btn = document.getElementById("btn");
let lnk = document.getElementById("lnk");
let txt = document.getElementById("txt");

btn.addEventListener("click", buttonClicked);
function buttonClicked(ev) {
    console.log(ev.type, ev.target, ev.currentTarget);
}

// fat arrow function
lnk.addEventListener("click", ev => {
    ev.preventDefault();
    console.log(ev.type, ev.target);
});

txt.addEventListener("input", ev => {
    console.log(ev.type, ev.target, ev.target.value);
});

txt.addEventListener("change", ev => {
    console.log(ev.type, ev.target, ev.target.value);
});

txt.addEventListener("blur", ev => {
    console.log(ev.type);
});



// anonymous function
/* lnk.addEventListener("click", function(ev) {
    ev.preventDefault();
    console.log(ev.type, ev.target);
}); */

// named function
/* lnk.addEventListener("click", linkClicked);
function linkClicked(ev) {
    ev.preventDefault(); // disable hyperlink
    console.log(ev.type, ev.target, ev.currentTarget);
} */



/* myDiv.addEventListener("click", doSomething);

function doSomething(event) {
    console.log(event.type); //click
    console.log(event.target);
    return 7;
} */