
const path = require('path'); // this will load in the path module and store it in the constant 'path'

var pathObj = path.parse(__filename); // this use the parse() method and store the result in 'pathObj'

console.log(pathObj);



const os = require('os'); // load in the os module

var totMem = os.totalmem(); // method call
var freeMem = os.freemem();

console.log(`Total Memory: ${totMem}`); // latest formatting without using concatenation
console.log(`Free Memory: ${freeMem}`);