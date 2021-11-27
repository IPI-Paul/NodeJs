const fs = require('fs');

var readStream = fs.createReadStream('./sources/txt/tutorial_14.txt', 'utf-8');
var data = '';

readStream.on('data', function(chunk) {
	console.log('----------------------------------------------------------------------------------');
	data += chunk;
});

readStream.on('end', function(chunk) {
	console.log(data);
	console.log('--------------------------------------End-----------------------------------------');
});