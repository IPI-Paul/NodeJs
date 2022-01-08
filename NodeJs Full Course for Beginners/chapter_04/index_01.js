const logEvents = require('./logEvents_01');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize the object
const myEmitter = new MyEmitter();

// add a listner for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
  /*  Emit the event
      There can be more than one parameter. Just add more after 'Log event emitted!'
  */
  myEmitter.emit('log', 'Log event emitted!');
}, 2000);