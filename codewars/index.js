function FirstReverse(str) { 
    console.log(str);
    for (var a = 0; a < str.length; a++) {
        console.log(a+" "+str[a]);
    }
    console.log("\r");
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        console.log(i+" "+str[i]);
        newString = newString + str[i];
    }
    return newString;
}
     
// keep this function call here 
console.log(FirstReverse("codewars"));

// https://coderbyte.com/editor/First%20Reverse:JavaScript
