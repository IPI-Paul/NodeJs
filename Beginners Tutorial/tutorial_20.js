const fs = require('fs');

fs.unlink('./sources/temp/temp.txt', function(err) {
	if (err)
		return console.log(err);
	fs.rmdir('./sources/temp', function(err) {
		if (err)
			return console.log(err);
	});
	console.log('File and directory removed!')
});