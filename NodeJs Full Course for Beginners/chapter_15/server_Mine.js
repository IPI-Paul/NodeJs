const { globalLoc } = require('../globals');
require(globalLoc + 'dotenv').config();
const express = require(globalLoc + 'express');
const app = express();
const path = require('path');
const cors = require(globalLoc + 'cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT_Mine');
const cookieParser = require(globalLoc + 'cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require(globalLoc + 'mongoose');
const connectDb = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

// Connect to MongoDb
connectDb();

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials)

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// buit-in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// server static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth_Mine'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout_Mine'));

app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees'));
app.use('/users', require('./routes/api/users'));

// old versions of express app.use('/') does not accept regex, but new versions do
// app.all does accept regex
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found'});
  } else {
    res.type('txt').send('404 Not Found');
  }  
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDb');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});