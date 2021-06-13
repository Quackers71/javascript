


var blogText = "Sam I Am";
var pattern = /.m/g;
var result = blogText.match(pattern);
console.log(result); // (2) ["am", "Am"]


var blogText = "Sam I Am";
var pattern = /[aA]m/g;
var result = blogText.match(pattern);
console.log(result); // (2) ["am", "Am"]


var blogText = "Sam I Am";
var pattern = /am/gi; // i = case insensitive
var result = blogText.match(pattern);
console.log(result); // (2) ["am", "Am"]


var blogText = "Sam I Am";
var pattern = /am/g;
var result = blogText.match(pattern);
console.log(result); // ["am"]


var blogText = "Sam I Am";
var pattern = /m/g;
var result = blogText.match(pattern);
console.log(result); // (2) ["m", "m"]


var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result.index); // 2
result = pattern.exec(blogText); 
console.log(result.index); // 7


var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result.input); // Sam I Am


var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result.index); // 2


var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result[0]); // m


var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result); 
// ["m", index: 2, input: "Sam I Am", groups: undefined]


var blogText = "Sam I Am";
var pattern = /m/g;
console.log(pattern.test(blogText)); // true
console.log(pattern.test(blogText)); // true
console.log(pattern.test(blogText)); // false


var blogText = "Sam I Am";
var pattern = /bam/g;
console.log(pattern.test(blogText)); // false


var blogText = "Sam I Am";
var pattern = /am/g;
console.log(pattern.test(blogText)); // true


var blogText = "Sam I Am";
var pattern = /am/g;
console.log(pattern instanceof RegExp); // true


var blogText = "Sam I Am";
var pattern = new RegExp('am', 'g'); // g = global
console.log(pattern instanceof RegExp); // true