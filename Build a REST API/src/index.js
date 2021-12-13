/*
 * Global Packages installed and available
 * @pusher\chatkit, @pusher\chatkit-server, axios, bcrypt, body-parser, connect-flash, 
 * cookie-parser, cors, debug, ejs, express, express-generator, express-session, http-errors, 
 * jsdom, lodash, mongoose, morgan, nodemon, passport, passport-local, pg, prompt, pug, readline, 
 * sequelize, sequelize-cli, validator 
 */

const globalLoc = require('child_process').execSync('npm root -g').toString().trim().replace(/\\/g, '\\\\') + '\\\\';
let express = require(globalLoc + 'express');
let app = express();
let personRoute = require('./routes/person');
let customerRoute = require('./routes/customer');
let path = require('path');
let bodyParser = require(globalLoc + 'body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
	//res.send('') need this or next() to pass the response otherwise will timeout
	next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(express.static('public'));

// Handler for error 404 - Resource Not Found
app.use((req, res, next) => {
	res.status(404).send('We think that you are lost!');
});

// Handler for error 500 
app.use((err, req, res, next) => {
	console.error(err.stack);
	
	res.sendFile(path.join(__dirname, '../public/500.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
