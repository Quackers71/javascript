// running through some JS Array Methods taken from https://www.youtube.com/watch?v=R8rmfD9Y5-c

// The includes() method determines whether an array includes a certain value among its entries,
// returning true or false as appropriate.

const items = [1, 2, 3, 4, 5];
var number = 2;
const includesTwo = items.includes(number);

console.table(items);
console.log("Is the number " + number + " in the Array? : " + includesTwo);
