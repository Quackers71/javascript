


var button = document.getElementById('submit1');
var submitHandler = function formSubmitHandler() {
    console.log('in formSubmitHandler()');
};
button.addEventListener('click', submitHandler); 
button.removeEventListener('click', submitHandler); 
// nothing shows!