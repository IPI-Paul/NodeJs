const global = require('child_process').execSync('npm root -g').toString().trim().replace(/\\/g, '\\\\') + '\\\\';
const fJson = './sources/json/';
const express = require(global + 'express');
const fs = require('fs');
const students = JSON.parse(fs.readFileSync(fJson + 'tutorial_35.json', 'utf-8'));

const app = express();
app.set('view engine', 'ejs');
/*
 * GET
 * POST
 * PUT
 * DELETE
 */

app.get('/students/:id', function(req, res) {
	res.render('tutorial_37', { name: students[req.params.id], id: req.params.id});
});
app.listen(3000, function() {
	console.log('Our server is live on port 3000');
});