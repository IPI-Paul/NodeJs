const globals = require('./globals');
const globalLoc = globals.globalLoc;
const fileName = globals.fileName(__filename) + '.html';
const express = require(globalLoc + 'express');
const path = require('path');
const bodyParser = require(globalLoc + 'body-parser');
const app = express();

// Midleware
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', fileName));
});

app.post('/', (req, res) => {
  console.log(req.body);
  // database work here
  res.send('Successfully posted data');
});

app.listen(3000);
console.log('Server is running on port 3000.')
