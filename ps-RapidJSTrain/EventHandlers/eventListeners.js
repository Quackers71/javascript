


var button = document.getElementById('submit1');
var submitHandler = function formSubmitHandler() {
    console.log('in formSubmitHandler()');
};
button.addEventListener('click', submitHandler); 
button.removeEventListener('click', submitHandler); 
// nothing shows!


var button = document.getElementById('submit1');
var submitHandler = function formSubmitHandler() {
    console.log('in formSubmitHandler()');
};
button.addEventListener('click', submitHandler); 

// in formSubmitHandler()


var button = document.getElementById('submit1');
button.addEventListener('click', function() {
    console.log('Button Clicked');
}); 
button.addEventListener('click', function() {
    console.log('Another Listener Function');
}); 

// Button Clicked
// Another Listener Function


var button = document.getElementById('submit1');
button.addEventListener('click', function() {
    console.log('Button Clicked');
}); // Button Clicked