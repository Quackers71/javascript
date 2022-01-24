/* var access = document.getElementById("code3");
var code = access.innerHTML;
text = "Midnight";
code = code + text;
alert(code);

var insertText = document.createTextNode(text);
access.appendChild(insertText);
console.log(text);

access.style.color = 'pink';

var access = document.getElementById("code2");
text = "M";
var insertText = document.createTextNode(text);
access.appendChild(insertText);
access.style.color = 'purple';

var access = document.getElementById("code1");
text = "Gutter";
var insertText = document.createTextNode(text);
access.appendChild(insertText);
access.style.color = 'beige'; */


function addText(id, text) {
    var text;
    var access = document.getElementById(id);
    var insertText = document.createTextNode(text);
    access.appendChild(insertText);
}

addText("code1", "Gutter");
addText("code2", "M");
addText("code3", "Midnight");