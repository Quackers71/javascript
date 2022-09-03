// Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS) via https://www.youtube.com/watch?v=zJSY8tbf_ys

const htmlBody = document.querySelector('html');
const h1Body = document.querySelector('h1');
console.log(htmlBody);

const randomClickFunction = function() {
    const colors = ["#333", "#002942", "#0Ca7DB", "red", "blue", "green", "yellow", "orange", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomColor;
    h1Body.style.backgroundColor = randomColor;

    console.log("Color set to : " + randomColor);
}

htmlBody.onclick = randomClickFunction;