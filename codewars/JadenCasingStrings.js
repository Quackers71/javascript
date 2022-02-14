String.prototype.toJadenCase = function (str) { 
    console.log(str);
    var fullString = str.split(" ");
    console.log(fullString);
    var newString = fullString.map((s) => s.charAt(0).toUpperCase()+s.substring(1)).join(" ");

    return newString;
}

console.log("".toJadenCase("How can mirrors be real if our eyes aren't real"));

/* "How can mirrors be real if our eyes aren't real"
   "How Can Mirrors Be Real If Our Eyes Aren't Real" */

// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
// *** On the actual kata I had to use on line 3: var fullString = this.split(" "); ***

// * Another way: return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ') *

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Array.prototype.map()
