const globals = require('./globals');
const global = globals.global;
const fileName = globals.fileName(__filename) + '.html';
const express = require(global + 'express');
const path = require('path');
const bodyParser = require(global + 'body-parser');
const app = express();

// Midleware
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', fileName));
});

app.post('/', (req, res) => {
  console.log(req.body);
  // database work here
  res.json({success: true});
});

app.listen(3000);
console.log('Server is running on port 3000.')