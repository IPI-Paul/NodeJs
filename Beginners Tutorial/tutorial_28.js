const fs = require('fs');

var readStream = fs.createReadStream('./sources/txt/tutorial_14.txt', 'utf-8');
var writeStream = fs.createWriteStream('./sources/txt/tutorial_28.txt')

readStream.pipe(writeStream);