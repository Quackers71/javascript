


var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
    console.log(this.id);
    event.stopPropagation();
    event.preventDefault();
};
div1.addEventListener('click', clickHandler, true); 
div2.addEventListener('click', clickHandler, true); 
// div1


var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
    console.log(this.id);
    event.stopPropagation();
};
div1.addEventListener('click', clickHandler, true); 
div2.addEventListener('click', clickHandler, true); 
// div1


var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
    console.log(this.id);
};
div1.addEventListener('click', clickHandler, true); 
div2.addEventListener('click', clickHandler, true); 
// div1
// div2


var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
    console.log(this.id);
};
div1.addEventListener('click', clickHandler, false); 
div2.addEventListener('click', clickHandler, false); 
// div2
// div1