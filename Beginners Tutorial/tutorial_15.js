const fs = require('fs');

fs.readFile('./sources/txt/tutorial_14.txt', 'utf-8', function(err, data) {
	if (err) {
		return console.error(err)
	}
	console.log(data);
	fs.writeFile('./sources/txt/tutorial_15.txt', data, function(err, data) {
		if (err) {
			return console.error(err)
		}
		console.log('Success writing to file!!!');
	});	
});

console.log('The file is read');