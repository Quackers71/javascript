String.prototype.toJadenCase = function (str) { 
    console.log(str);
    var newString = str.toLowerCase().split(" ");
    console.log(newString);
    
    for (i = 0; i < newString.length; i++) {
        if (newString.length[i] < newString.length) {
            newString[i] = newString[i].charAt(0).toUpperCase()+newString[i].substring(0);
        }
        str = newString.join(" ");
    }
    console.log(newString);
    console.log(str);
    return newString.join(" ");
}
    
// var string = "How can mirrors be real if our eyes aren't real";
console.log("".toJadenCase("How can mirrors be real if our eyes aren't real"));

/* "How can mirrors be real if our eyes aren't real"
   "How Can Mirrors Be Real If Our Eyes Aren't Real" */

// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
