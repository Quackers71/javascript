// Larry's Code
function validate(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.charAt(i) !== '-') {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}

var test = validate("123-4567");
console.log("Larry's validation : "+test);




// Brad's Code
function validation(phoneNo) {
    if (phoneNo.length !== 8) {
        return false;
    }
    var first = phoneNo.substring(0,3);
    var second = phoneNo.substring(4);
    if (phoneNo.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
        return false;
    }
    return true;
}

var test2 = validation("765-4320");
console.log("Brad's validation  : "+test2);
