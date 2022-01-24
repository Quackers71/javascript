function addText(id, text) {
    var text;
    var access = document.getElementById(id);
    
    var code = access.innerHTML;
    code = code + text;
    alert(code);

    var insertText = document.createTextNode(text);
    access.appendChild(insertText);
}

addText("code1", "Gutter");
addText("code2", "M");
addText("code3", "Midnight");