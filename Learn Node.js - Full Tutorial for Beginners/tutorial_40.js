const globalLoc = require('./globals').globalLoc;
const express = require(globalLoc + 'express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/example', (req, res) => {
  res.send('Hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
  console.log(req.params); 
  res.send(req.params.name + ': ' + req.params.age);
});

app.listen(3000);
console.log('Server is running on port 3000.')
