// Event Listeners - Javascript - Tutorial 14 taken from https://youtu.be/jrI0WFCCLWY

function handleClick(element) {
    element.style = "background-color: blue;";
}

const image = document.getElementById("image");
image.addEventListener("mouseover", function() {
    this.style = "box-shadow: 15px 15px 15px 15px #222";
    this.width = "300";
});

image.addEventListener("mouseout", function() {
    this.style = "";
    this.width = "250";
});

let div = document.createElement('div');
div.id = 'content';
div.innerHTML = "<h2>using JavaScript</h2>";
document.body.appendChild(div);

// Create a button element
const button = document.createElement('button');
button.innerText = 'Very Basic Calculator'
button.id = "calcBtn";
button.addEventListener('click', () => {
    let x;
    let ttl = calculator(x);

    const p = document.createElement("p");
    // li.id = "result";
    p.innerHTML = `<p id="total">The total is ${ttl}</p>`;
    document.body.appendChild(p);
  });

document.body.appendChild(button)

function calculator(num1, num2) {
    var num1 = window.prompt("Enter the 1st number");
    var num2 = window.prompt("Enter the 2nd number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var total = num1 + num2;
    return total;
}
