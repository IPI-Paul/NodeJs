const events = require('events');
const util = require('util');

const Students = function(name) {
	this.name = name;
}

util.inherits(Students, events.EventEmitter);

var max = new Students('max');

max.on('scored', function(marks) {
	console.log(max.name + ' scores ' + marks + ' marks');
});

max.emit('scored', 95)

var tom = new Students('tom');

tom.on('scored', function(marks) {
	console.log(tom.name + ' scores ' + marks + ' marks');
});

tom.emit('scored', 60)