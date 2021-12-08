const globals = require('./globals');
const global = globals.global;
const express = require(global + 'express');
const path = require('path');
const app = express();

let fileName = globals.fileName(__filename) + '.html';

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', fileName));
});

app.listen(3000);
console.log('Server is running on port 3000.')