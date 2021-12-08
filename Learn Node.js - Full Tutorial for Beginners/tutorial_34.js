const globals = require('./globals');
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const readStream = fs.createReadStream('./public/json/' + globals.fileName(__filename) + '.json');
  res.writeHead(200, {'Content-type': 'application/json'});
  readStream.pipe(res);
}).listen('3000');