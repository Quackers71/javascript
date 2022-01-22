// EVENTS //

// var button = document.getElementById('button').addEventListener('click', buttonClick); 
    
/* function buttonClick() {
    console.log("Button Clicked");
    var textChange = document.getElementById('header-title');
    textChange.textContent = 'Item Listen';
    textChange.style.color = 'blue';
    document.querySelector('#main').style.backgroundColor = 'grey';
} */

/* function buttonClick(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);

    var clicky = document.getElementById('button');
    clicky.innerHTML = '<h3>'+e.target.id+'</h3>';
    
    // console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
} */


// listLIs = document.getElementsByClassName('list-group-item');
// console.log(listLIs);

// my attempt at at an 'il' element into a 'lu'
// however, this doesn't follow the same formatting of the existing 'il'
/* var ul = document.getElementById('items');
var li = document.createElement('li');
li.appendChild(document.createTextNode('Item5'));
ul.appendChild(li); */

var button = document.getElementById('button');
var box = document.getElementById('box');
// button.addEventListener('click', runEvent); 
// button.addEventListener('dblclick', runEvent); 
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

itemInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE : '+e.type);

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

    var output = document.getElementById('items');
    output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}













