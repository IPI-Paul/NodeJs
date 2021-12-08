const global = require('./globals').global;
const express = require(global + 'express');
const bodyParser = require(global + 'body-parser');
const app = express();

// Midleware
app.use(bodyParser.json());
app.use('/example', (req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Middleware');
});

app.listen(3000);
console.log('Server is running on port 3000.')