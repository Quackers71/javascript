function FirstReverse(str) { 
    console.log(str);
    /* The quick brown fox jumps over the lazy dog. */

    newString = str.split(" ");
    /* (9) ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.'] */

    newString = str.split(" ").reverse();
    /* (9) ['dog.', 'lazy', 'the', 'over', 'jumps', 'fox', 'brown', 'quick', 'The'] */

    newString = str.split(" ").reverse().join(" ");
    /* dog. lazy the over jumps fox brown quick The */

    return newString; 
    /* dog. lazy the over jumps fox brown quick The */

}
     
console.log(FirstReverse("The quick brown fox jumps over the lazy dog."));

/* The quick brown fox jumps over the lazy dog.
   dog. lazy the over jumps fox brown quick The */

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
