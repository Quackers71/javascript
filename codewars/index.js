String.prototype.toJadenCase = function (str) { 
    console.log(str);
    var newString = str.toLowerCase().split(" ");
    console.log(newString);
    
    for (i = 0; i < newString.length; i++) {
        console.log(newString[i].charAt(0).toUpperCase("").split(" "));
        newString = newString[i].charAt(0).toUpperCase("").split(" ");
        
    }
    console.log(newString);
    return newString;
}

console.log("".toJadenCase("JADEN"));

/* "How can mirrors be real if our eyes aren't real"
   "How Can Mirrors Be Real If Our Eyes Aren't Real" */

// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
