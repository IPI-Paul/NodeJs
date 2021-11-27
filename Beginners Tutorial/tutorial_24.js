const fs = require('fs');

var readStream = fs.createReadStream('./sources/txt/tutorial_14.txt', 'utf-8');

readStream.on('data', function(chunk) {
	console.log('----------------------------------------------------------------------------------');
	console.log(chunk);
});

readStream.on('end', function(chunk) {
	console.log('--------------------------------------End-----------------------------------------');
});