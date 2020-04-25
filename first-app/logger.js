
console.log(__filename);
console.log(__dirname);

var url = "http://mylogger.io/log";

function log(message) {
    // Send a HTTP request
    console.log(message);
}

module.exports = log; // module defined as a single function
module.exports.log = log; // you can also have this
exports.log = log; // and this


// Output
/* PS C:\Users\fcukq\Desktop\javascript\first-app> node .\app.js
C:\Users\fcukq\Desktop\javascript\first-app\logger.js
C:\Users\fcukq\Desktop\javascript\first-app
Yo, Hello */