const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('clicked', function() {
	console.log('Something has been clicked!');
});

eventEmitter.emit('clicked');

eventEmitter.on('clicked1', function(button) {
	console.log(button + ' has been clicked!');
});

eventEmitter.emit('clicked1', 'Button 1');
