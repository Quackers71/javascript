// Larry's Code
function validate(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {
        return false;
    }
    for (var i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.length === 8 && phoneNumber.charAt(i) !== '-') {
                return false;
            }
        } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
            return false;
        }
    }
    return true;
}

var testNumber = "123-4567";
var larryTest = validate(testNumber);
console.log("Phone Number validated : "+testNumber);
console.log("Larry's 1st validation : "+larryTest);

var testNumber2 = "1234567";
var larryTest2 = validate(testNumber2);
console.log("Phone Number validated : "+testNumber2);
console.log("Larry's 2nd validation : "+larryTest2);
console.log("\n");



// Brad's Code
function validation(phoneNo) {
    if (phoneNo.length > 8 || phoneNo.length < 7) {
        return false;
    }
    var first = phoneNo.substring(0,3);
    var second = phoneNo.substring(phoneNo.length - 4);
    if (isNaN(first) || isNaN(second)) {
        return false;
    }
    if (phoneNo.length === 8) {
        return (phoneNo.charAt(3) === "-");
    }
    return true;
}

var testNo = "765-4321"
var bradTest = validation(testNo);
console.log("Phone Number validated : "+testNo);
console.log("Brad's 1st validation  : "+bradTest);

var testNo2 = "7654321"
var bradTest2 = validation(testNo2);
console.log("Phone Number validated : "+testNo2);
console.log("Brad's 2nd validation  : "+bradTest2);

console.log("\n*** Found the bug by accident! ***");
var testNo3 = "765-321"
var bradTest3 = validation(testNo3);
console.log("Phone Number validated : "+testNo3);
console.log("Brad's 3rd validation  : "+bradTest3);
