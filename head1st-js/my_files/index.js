/* var access = document.getElementById("code3");
var code = access.innerHTML;
text = "Midnight";
code = code + text;
alert(code);

var insertText = document.createTextNode(text);
access.appendChild(insertText);
console.log(text);
 */

function addText(id, text) {
    var text;
    var access = document.getElementById(id);
    
    var code = access.innerHTML;
    code = code + text;
    console.log(code);

    var insertText = document.createTextNode(text);
    access.appendChild(insertText);
    access.style.color = "white";
}

addText("code2", " Gutter");
addText("code6", " M");
addText("code9", " Midnight");