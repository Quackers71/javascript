


var ratings = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(ratings.lastIndexOf(1)); // 8


var ratings = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(ratings.indexOf(66)); // -1
// when the indexOf cannot return a value you'll receive -1


var ratings = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(ratings.indexOf('3')); // -1
// when the indexOf cannot return a value you'll receive -1


var ratings = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(ratings.indexOf(3)); // 2


var ratings = [4, 1, 3, 2, 10];
ratings.sort(function (value1, value2) {
    return value1 - value2;
});
console.log(ratings.toString()) // 1, 2, 3, 4, 10


var ratings = [4, 1, 3, 2, 10];
ratings.sort();
console.log(ratings.toString()) // 1, 10, 2, 3, 4


var ratings = [4, 1, 3, 2];
ratings.sort();
console.log(ratings.toString()) // 1, 2, 3, 4


var ratings = [1, 2, 3, 4];
ratings.reverse();
console.log(ratings.toString()) // 4, 3, 2, 1


var ratings = [1, 2, 3, 4];
ratings.splice(2, 1, 99, 100, 101); // 99 spliced @index 2
console.log(ratings.toString()) // 1, 2, 99, 100, 101, 4


var ratings = [1, 2, 3, 4];
ratings.splice(2, 0, 99, 100, 101); // 99 spliced @index 2
console.log(ratings.toString()) // 1, 2, 99, 100, 101, 3, 4


var ratings = [1, 2, 3, 4];
ratings.splice(2, 0, 99); // 99 spliced @index 2
console.log(ratings.toString()) // 1, 2, 99, 3, 4


var ratings = [1, 2, 3, 4];
var removedRating = ratings.splice(0, 1);
console.log(removedRating.toString()) // 1


var ratings = [1, 2, 3, 4];
ratings.splice(1, 2);
console.log(ratings.toString()) // 1,4


var ratings = [1, 2, 3, 4];
var newRatings = ratings.slice(-2);
console.log(newRatings.toString()) // 3,4


var ratings = [1, 2, 3, 4];
var newRatings = ratings.slice(1,3);
console.log(ratings.toString()) // 1,2,3,4


var ratings = [1, 2, 3, 4];
var newRatings = ratings.slice(2);
console.log(newRatings.toString()) // 3,4


var ratings = [1, 2, 3];
var newRatings = ratings.concat([4, 5, 6], 7, 8);
console.log(ratings.length) // 3


var ratings = [1, 2, 3];
var newRatings = ratings.concat([4, 5, 6], 7, 8);
console.log(newRatings.length) // 8


var ratings = [1, 2, 3];
var newRatings = ratings.concat([4, 5, 6]);
console.log(newRatings.length) // 6


var ratings = [];
ratings.push(5);
ratings.push(2, 4);
var newCount = ratings.unshift(3);
console.log(ratings[0]) // 3
console.log(newCount); // 4


var ratings = [];
ratings.push(5);
ratings.push(2, 4);
var firstRating = ratings.shift();
console.log(ratings.length) // 2


var ratings = [];
ratings.push(5);
ratings.push(2, 4);
var firstRating = ratings.shift();
console.log(firstRating) // 5


var ratings = [];
ratings.push(5);
ratings.push(2, 4);
ratings.pop();
console.log(ratings.length) // 2


var ratings = [];
ratings.push(5);
ratings.push(2, 4);
console.log(ratings.pop()) // 4


var ratings = [];
ratings.push(5);
ratings.push(2, 4);
console.log(ratings.length) // 3