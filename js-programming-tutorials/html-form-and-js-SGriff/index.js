// HTML Forms and JavaScript - Tutorial taken from https://youtu.be/ikR9DsGMUMc



const init = function() {
    document.getElementById("button-cancel").addEventListener("click", reset);
    document.getElementById("button-send").addEventListener("click", send);
}
const reset = function(ev) {
    ev.preventDefault();
    document.getElementById("form-user").reset();
}

const send = function(ev) {
    ev.preventDefault();
    let ret = validate();
    if(ret) {
        document.getElementById("form-user").submit();
    } else {
        // bad user
        let err = document.querySelector(".error");
        let input = err.querySelector("input");
        err.setAttribute("data-errormsg", ` ... Missing ${input.placeholder}`);
    }
}

const validate = function(ev) {
    let valid = false;
    let chk = document.getElementById("input-value");

    let select = document.getElementById("input-age");

    let first = document.getElementById("input-first");
    let last = document.getElementById("input-last");
    let email = document.getElementById("input-email");

    return true;

}


document.addEventListener("DOMContentLoaded", init);