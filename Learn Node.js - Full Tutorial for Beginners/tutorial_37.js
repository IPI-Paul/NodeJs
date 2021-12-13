const globalLoc = require('./globals').globalLoc;
const express = require(globalLoc + 'express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
console.log('Server is running on port 3000.');
