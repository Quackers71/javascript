var url = "http://mylogger.io/log";

function log(message) {
    // Send a HTTP request
    console.log(message);
}

module.exports = log; // module defined as a single function
