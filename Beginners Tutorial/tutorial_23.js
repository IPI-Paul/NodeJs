const fs = require('fs');

var readStream = fs.createReadStream('./sources/txt/tutorial_14.txt');

readStream.on('data', function(chunk) {
	console.log('----------------------------------------------------------------------------------');
	console.log(chunk);
});