const fs = require('fs');

fs.unlink('./sources/txt/tutorial_15.txt', function(err) {
	if (err) {
		return console.log(err);
	}
	console.log('The file has been deleted!')
});