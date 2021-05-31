// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
// 2nd Attempt - don't work! :-( - WIP - Crack on Yo

function spinWords(string){
    var wordArray = string.split(' ');
    console.log(wordArray);
    //console.log(wordArray[6]);

    var items = wordArray;
    var item = items[Math.floor(Math.random() * items.length)];
    console.log(item);
    //return item;

    function reverseWord (sentence){
        return sentence.split(' ').map(function(word){
            return word.split('').reverse().join('');
        }).join(' ');
    }
    console.log(reverseWord(item));

    function wordsReverser(items){
        var items = string.split(' ');
        var result = [];
        for (var i = 0; i < items.length; i++){
            result.push(items[i].split('').reverse().join(''));
        }
        return result.join(' ');
    }
    console.log(wordsReverser(items));
}

spinWords('Hello to all the Donkeys in the World!');