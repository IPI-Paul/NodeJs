const { globalLoc } = require('../globals');
const express = require(globalLoc + 'express');
const app = express();
const path = require('path');
const cors = require(globalLoc + 'cors');
const { logger } = require('./middleware/logEvents_02');
const errorHandler = require('./middleware/errorHandler_01');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
const whitelist = ['https://www.yoursite.com', 'http://127.0.0.1:5500', 'http://localhost:3500'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

/* 
  applies to all routes below it
  built-in middleware to handle urlencoded data
  in other words, form data:
  content-type: application/x-www-form-urlencoded
*/
app.use(express.urlencoded({ extended: false }));

// buit-in middleware for json
app.use(express.json());

// server static files
app.use(express.static(path.join(__dirname, '/public')));

// select secton then shift alt down arrow to copy down
// Route handlers
app.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
  res.redirect(301, 'new-page.html'); // 302 by default
});

app.get('/hello(.html)?', (req, res, next) => {
  console.log('Attempted to load hello.html');
  next()
}, (req, res) => {
  res.send('Hello World!');
});

// chaining route handlers in an array (similar to Middleware)
const one = (req ,res, next) => {
  console.log('one');
  next();
}

const two = (req ,res, next) => {
  console.log('two');
  next();
}

const three = (req ,res, next) => {
  console.log('three');
  res.send('Finished!');
}

app.get('/chain(.html)?', [one, two, three]);

// old versions of express app.use('/') does not accept regex, but new versions do
// app.all does accept regex
app.all('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));