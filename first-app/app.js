
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);



// Output:
/* PS C:\Users\fcukq\Desktop\javascript\first-app> node .\app.js
{
  root: 'C:\\',
  dir: 'C:\\Users\\fcukq\\Desktop\\javascript\\first-app',
  base: 'app.js',
  ext: '.js',
  name: 'app'
} */
