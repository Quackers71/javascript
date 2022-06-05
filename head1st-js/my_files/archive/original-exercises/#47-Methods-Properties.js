// The length property & the charAt method
var input = "jenny@wickedlysmart.com";
for(var i = 0; i < input.length; i++) {
    if (input.charAt(i) === "@") {
        console.log("There's an @ sign at index " + i); // 5
    }
}

// The indexOf method
var phrase = "the cat in the hat";

var index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index); // 4

index = phrase.indexOf("the", 5);
console.log("there's a the sitting at index " + index); // 11

index = phrase.indexOf("dog");
console.log("there's a dog sitting at index " + index); // -1 i.e. no "dog"

// The substring method
var data = "name|phone|address";

var val = data.substring(5, 10);
console.log("Substring is " + val); // Substring is phone

val = data.substring(5);
console.log("Substring is now " + val); // Substring is now phone|address


// The split method
var data = "name|phone|address";

var vals = data.split("|");
console.log("Split array is ", vals); // Split array is  (3) ['name', 'phone', 'address']

// Other Methods
/* 
toLowerCase()
replace()
slice()
lastIndexOf()
concat()
substring() * example above
trim()
match()
toUpperCase()
*/
