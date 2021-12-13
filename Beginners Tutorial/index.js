const globalLoc = require('child_process').execSync('npm root -g').toString().trim().replace(/\\/g, '\\\\') + '\\\\';
const fJson = './sources/json/';
const express = require(globalLoc + 'express');
const fs = require('fs');
const tutorials = JSON.parse(fs.readFileSync(fJson + 'index.json', 'utf-8'));
const port = 3000;

const app = express();
app.set('view engine', 'ejs');
/*
 * GET
 * POST
 * PUT
 * DELETE
 */

app.get('*', function(req, res) {
	if(req.url == '/') {
		res.render('index', {allData: tutorials});		
	} else {
		res.sendFile(__dirname + req.url);
	}
});
app.listen(port, function() {
	console.log(`Our server is live on port ${port}`);
});
