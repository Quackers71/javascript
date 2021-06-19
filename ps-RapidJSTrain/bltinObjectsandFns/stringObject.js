


var value = 'Some String';
console.log(value.substr(5, 6)); // String


var value = 'Some String';
console.log(value.substring(5, 6)); // S


var value = 'Some String';
console.log(value.substr(0, 4)); // Some


var value = 'Some String';
console.log(value.split(' ').length); // 2
// splits strings into an array


var value = 'Some String';
console.log(value.slice(-3)); // ing


var value = 'Some String';
console.log(value.slice(5, 8)); // Str


var value = 'Some String';
console.log(value.slice(5)); // String


var value = 'Some String';
console.log(value.lastIndexOf('S')); // 5


var value = 'My String';
console.log(value.indexOf('Z')); // -1


var value = 'My String';
console.log(value.indexOf('M')); // 0


var value = 'My String';
console.log(value.endsWith('ing ')); // false


var value = 'My String';
console.log(value.endsWith('ing')); // true


var value = 'My String';
console.log(value.includes(' ')); // true


var value = 'My String';
console.log(value.concat(' Lives!')); // My String Lives


var value = 'My String';
console.log(value.charAt(3)); // S