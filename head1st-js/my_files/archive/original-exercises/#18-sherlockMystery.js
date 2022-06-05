var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
    cameraOn = false;
    console.log("Camera on : " + cameraOn);
    console.log("local balance : " + balance);
    if (amount < balance) {
        balance = balance - amount;
    }
    console.log("local balance : " + balance + " - stolen amount");
    return amount;
    cameraOn = true;
}

var amount = steal(balance, 1250);
console.log("Criminal: you stole £" + amount);
console.log("The real balance : " + balance + " is untouched!");
