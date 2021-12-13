const globalLoc = require('child_process').execSync('npm root -g').toString().trim().replace(/\\/g, '\\\\') + '\\\\';
const express = require(globalLoc + 'express');

const app = express();
/*
 * GET
 * POST
 * PUT
 * DELETE
 */

app.get('/', function(req, res) {
	res.send('This is the home page!');
});
app.get('/about', function(req, res) {
	res.send('This is the about page!');
});
app.get('/content', function(req, res) {
	res.send('This is the content page!');
});
app.listen(3000, function() {
	console.log('Our server is live on port 3000');
});
