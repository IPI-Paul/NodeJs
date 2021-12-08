const globals = require('./globals');
const http = require('http');
const server = http.createServer((req, res) => {
  res.write('Hello world from nodejs');
  res.end();
});

server.listen('3000');