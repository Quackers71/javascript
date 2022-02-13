function FirstReverse(str) { 
    console.log(str);
    return str.split("").reverse().join("").split(" ").reverse().join(" ");

    /* var reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" "); */
}

console.log(FirstReverse("The quick brown fox jumps over the lazy dog."));

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript