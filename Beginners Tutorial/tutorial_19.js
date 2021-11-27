const fs = require('fs');

fs.mkdir('./sources/temp', function() {
	fs.writeFile('./sources/temp/temp.txt', 'This is just a temp file!', function(err) {
		if (err)
			return console.log(err);
		console.log('Directory and file added!');
	});
});