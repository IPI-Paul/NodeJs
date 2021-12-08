const global = require('./globals').global;
const express = require(global + 'express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/example', (req, res) => {
  res.send('Hitting example route');
});

app.listen(3000);
console.log('Server is running on port 3000.');