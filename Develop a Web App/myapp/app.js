/*
 * Global Packages installed and available
 * @pusher\chatkit, @pusher\chatkit-server, axios, bcrypt, body-parser, connect-flash, 
 * cookie-parser, cors, debug, ejs, express, express-generator, express-session, http-errors, 
 * jsdom, lodash, mongoose, morgan, nodemon, passport, passport-local, pg, prompt, pug, readline, 
 * sequelize, sequelize-cli, validator 
 */

const globalLoc = require('./globals');
var createError = require(globalLoc + 'http-errors');
var express = require(globalLoc + 'express');
var path = require('path');
var cookieParser = require(globalLoc + 'cookie-parser');
var logger = require(globalLoc + 'morgan');
let passport = require(globalLoc + 'passport');
let session = require(globalLoc + 'express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

require('./passport_setup')(passport);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'our new secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
