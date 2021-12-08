const globals = require('./globals');
const global = globals.global;
const fileName = globals.fileName(__filename);
const express = require(global + 'express');
const path = require('path');
const app = express();

// Midleware
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const people = require(`./public/routes/${fileName}`);

app.use('/people', people);

app.listen(3000);
console.log('Server is running on port 3000.')