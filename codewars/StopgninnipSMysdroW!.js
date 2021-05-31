// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript


function spinWords(string){
    var wordArray = string.split(' ');
    console.log(wordArray);
    //console.log(wordArray[6]);

    var items = wordArray;
    var item = items[Math.floor(Math.random() * items.length)];
    console.log(item);
    //return item;

    var reversedItem = item;
    //console.log(reversedItem);

    console.log(reversedItem.split("").reverse().join(""));
    //return reversedItem.split("").reverse().join("");
    
}

spinWords('Hey fellow warriors');