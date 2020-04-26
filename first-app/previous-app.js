
const path = require('path'); // this will load in the path module and store it in the constant 'path'

var pathObj = path.parse(__filename); // this use the parse() method and store the result in 'pathObj'

console.log(pathObj);



const os = require('os'); // load in the os module

var totMem = os.totalmem(); // method call
var freeMem = os.freemem();

console.log(`Total Memory: ${totMem}`); // latest formatting without using concatenation
console.log(`Free Memory: ${freeMem}`);


const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});



// Output
/* PS C:\Users\fcukq\Desktop\javascript\first-app> node .\app.js
{
  root: 'C:\\',
  dir: 'C:\\Users\\fcukq\\Desktop\\javascript\\first-app',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
Total Memory: 8511586304
Free Memory: 3076952064
Result [ 'app.js', 'logger.js' ] */
