const fs = require('fs');

var readStream = fs.createReadStream('./sources/txt/tutorial_14.txt', 'utf-8');
var writeStream = fs.createWriteStream('./sources/txt/tutorial_27.txt')

readStream.on('data', function(chunk) {
	console.log('----------------------------------------------------------------------------------');
	writeStream.write(chunk);
});

readStream.on('end', function(chunk) {
	console.log('--------------------------------------End-----------------------------------------');
});