const globals = require('./globals');
const globalLoc = globals.globalLoc;
const fileName = globals.fileName(__filename) + '.html';
const express = require(globalLoc + 'express');
const path = require('path');
const Joi = require(globalLoc + 'joi');
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
  const schema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required()
  });
  
  // Altered due to Joi depracatated version
  const validation = schema.validate(req.body);
  if (validation.error) {
    console.log(validation.error.message);
    res.send('An error has occured');
  } else {
    console.log(validation);
    res.send('Successfully posted data');  
  }
  //res.send(validation);
});

app.listen(3000);
console.log('Server is running on port 3000.')
