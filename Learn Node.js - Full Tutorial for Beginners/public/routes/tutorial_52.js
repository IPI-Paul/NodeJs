const globals = require('../../globals');
const global = globals.global;
const express = require(global + 'express');
const route = express.Router();

route.get('/', (req, res) => {
  res.send('/ being hit');
});

route.get('/example', (req, res) => {
  res.send('/example being hit');
});

module.exports = route;