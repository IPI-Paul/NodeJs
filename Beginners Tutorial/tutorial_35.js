const globalLoc = require('child_process').execSync('npm root -g').toString().trim().replace(/\\/g, '\\\\') + '\\\\';
const sJson = './sources/json/';
const express = require(globalLoc + 'express');
const fs = require('fs');
const students = JSON.parse(fs.readFileSync(sJson + 'tutorial_35.json', 'utf-8'));

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
