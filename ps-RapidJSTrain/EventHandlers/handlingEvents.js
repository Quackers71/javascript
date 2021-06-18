


var button = document.getElementById('submit5');
button.onclick =  function() {
    console.log('Button Clicked');
}
button.onclick = null; // nothing shows!


var button = document.getElementById('submit4');
button.onclick =  function() {
    console.log('Button Clicked'); // Button Clicked
}


function submitForm3(element, event) {
    console.log(event.type); // click
}


function submitForm2(element) {
    console.log(element.id); // submit2
}


function submitForm() {
    console.log('in submitForm'); // on Press it = in submitForm
}
