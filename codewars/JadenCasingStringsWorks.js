String.prototype.toJadenCase = function (str) { 
    console.log(str);
    /* How can mirrors be real if our eyes aren't real */

    var fullString = str.split(" ");
    
    console.log(fullString);
    /* (10) ['How', 'can', 'mirrors', 'be', 'real', 'if', 'our', 'eyes', "aren't", 'real'] */

    var newString = fullString.map((s) => s);
    /* (10) ['How', 'can', 'mirrors', 'be', 'real', 'if', 'our', 'eyes', "aren't", 'real'] */

    newString = fullString.map((s) => s.charAt(0));
    /* (10) ['H', 'c', 'm', 'b', 'r', 'i', 'o', 'e', 'a', 'r'] */

    newString = fullString.map((s) => s.charAt(0).toUpperCase());
    /* (10) ['H', 'C', 'M', 'B', 'R', 'I', 'O', 'E', 'A', 'R'] */

    newString = fullString.map((s) => s.charAt(0).toUpperCase()+s.substring(1));
    /* (10) ['How', 'Can', 'Mirrors', 'Be', 'Real', 'If', 'Our', 'Eyes', "Aren't", 'Real'] */

    newString = fullString.map((s) => s.charAt(0).toUpperCase()+s.substring(1)).join(" ");
    /* How Can Mirrors Be Real If Our Eyes Aren't Real */

    return newString;
}

console.log("".toJadenCase("How can mirrors be real if our eyes aren't real"));

/* "How can mirrors be real if our eyes aren't real"
   "How Can Mirrors Be Real If Our Eyes Aren't Real" */

// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Array.prototype.map()
