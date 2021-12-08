const globals = require('../../globals');
const global = globals.global;
const express = require(global + 'express');
const route = express.Router();

// Midleware
route.use((req, res, next) => {
  console.log('Middleware being used');
  next();
});

route.get('/', (req, res) => {
  res.send('/ being hit');
});

route.get('/example', (req, res) => {
  res.send('/example being hit');
});

module.exports = route;