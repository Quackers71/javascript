var emot = "XOxxOO";
var hugs = 0;
var kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();
for(var i = 0; i < emot.length ; i++) {
if (emot.charAt(i) === "X") {
    hugs++;
    } else if (emot.charAt(i) == "O") {
        kisses++;
    }
}

console.log(emot); // XOXXOO
console.log("hugs: "+hugs); // 3
console.log("kisses: "+kisses) // 3

var name = "Jenny";
var phone = "867-5309";
var fact = "This is a prime number";

var songName = phone + "/" + name;

var index = phone.indexOf("-");
console.log(index); // 3

if (fact.substring(10, 15) === "prime") {
    console.log(fact); // This is a prime number
}

console.log(fact.substring(10, 15)); // prime
