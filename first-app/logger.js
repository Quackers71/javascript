
const EventEmitter = require('events');

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
    log(message) { // this is now classed as a Method
        // Send a HTTP request
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}


module.exports = Logger; // module defined as a single function
