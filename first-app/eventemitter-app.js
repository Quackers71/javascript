
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger(); // this is the custom Class that extends EventEmitter

// Register a listener
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

logger.log('message');

// Output
/* PS C:\Users\fcukq\Desktop\javascript\first-app> node .\app.js
message
Listener called { id: 1, url: 'http://' } */