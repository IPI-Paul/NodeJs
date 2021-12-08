const globals = require('./globals');
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const readStream = fs.createReadStream('./public/html/' + globals.fileName(__filename) + '.html');
  res.writeHead(200, {'Content-type': 'text/html'});
  readStream.pipe(res);
}).listen('3000');