function FirstReverse(str) { 
    console.log(str);
    /* The quick brown fox jumps over the lazy dog. */

    newString = str.split("");
    /* (44) ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'j', 'u', 'm', 'p', 's', ' ', 'o', 'v', 'e', 'r', ' ', 't', 'h', 'e', ' ', 'l', 'a', 'z', 'y', ' ', 'd', 'o', 'g', '.'] */

    newString = str.split("").reverse();
    /* (44) ['.', 'g', 'o', 'd', ' ', 'y', 'z', 'a', 'l', ' ', 'e', 'h', 't', ' ', 'r', 'e', 'v', 'o', ' ', 's', 'p', 'm', 'u', 'j', ' ', 'x', 'o', 'f', ' ', 'n', 'w', 'o', 'r', 'b', ' ', 'k', 'c', 'i', 'u', 'q', ' ', 'e', 'h', 'T'] */

    newString = str.split("").reverse().join("");
    /* .god yzal eht revo spmuj xof nworb kciuq ehT */

    newString = str.split("").reverse().join("").split(" ");
    /* (9) ['.god', 'yzal', 'eht', 'revo', 'spmuj', 'xof', 'nworb', 'kciuq', 'ehT'] */

    newString = str.split("").reverse().join("").split(" ").reverse();
    /* (9) ['ehT', 'kciuq', 'nworb', 'xof', 'spmuj', 'revo', 'eht', 'yzal', '.god'] */

    newString = str.split("").reverse().join("").split(" ").reverse().join(" ");

    return newString; // .split("").reverse().join("").split(" ").reverse().join(" ");
    /* ehT kciuq nworb xof spmuj revo eht yzal .god */

}
     
console.log(FirstReverse("The quick brown fox jumps over the lazy dog."));

/* The quick brown fox jumps over the lazy dog.
ehT kciuq nworb xof spmuj revo eht yzal .god */

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
