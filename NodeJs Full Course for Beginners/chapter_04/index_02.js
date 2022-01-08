const logEvents = require('./logEvents_02');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize the object
const myEmitter = new MyEmitter();

// add a listner for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
  // Emit the event
  myEmitter.emit('log', 'Log event emitted!');
}, 2000);