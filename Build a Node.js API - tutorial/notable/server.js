/* Global and Dev Dependancies
  body-parser, express, mongodb, nodemon
*/
const { global } = require('./globals');
const express = require(global + 'express');
const MongoClient = require(global + 'mongodb').MongoClient;
const bodyParser = require(global + 'body-parser');
const db = require('./config/db');

// Framework
const app = express();  

const port = 8000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err)
    return console.log(err);
  
  // Routes
  require('./app/routes')(app, database.db('notable'));

  // Start Server
  app.listen(port, () => {
    console.log(`We are live on ${port}`);
  });
});