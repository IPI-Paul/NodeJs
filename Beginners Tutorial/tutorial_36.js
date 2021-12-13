const globalLoc = require('child_process').execSync('npm root -g').toString().trim().replace(/\\/g, '\\\\') + '\\\\';
const express = require(globalLoc + 'express');
const fs = require('fs');

const fJson = './sources/json/';
const fHtml = __dirname +'/sources/html/';
const students = JSON.parse(fs.readFileSync(fJson + 'tutorial_35.json', 'utf-8'));

const app = express();
/*
 * GET
 * POST
 * PUT
 * DELETE
 */

app.get('/', function(req, res) {
	res.sendFile(fHtml + 'tutorial_33.html');
});
app.get('/about', function(req, res) {
	res.sendFile(fHtml + 'tutorial_33a.html');
});
app.get('/content', function(req, res) {
	res.send('This is the content page!');
});
app.get('/students/:id', function(req, res) {
	res.send('You have requested to see the student id: ' + students[req.params.id]);
});
/*
app.get('/students/?name', function(req, res) {
	res.send('You have requested to see the student name: ' + req.params.name);
});
*/
app.listen(3000, function() {
	console.log('Our server is live on port 3000');
});
