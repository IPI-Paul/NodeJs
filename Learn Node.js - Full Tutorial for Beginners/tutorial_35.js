const globals = require('./globals');
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const readStream = fs.createReadStream('./public/images/' + globals.fileName(__filename) + '.svg');
  res.writeHead(200, {'Content-type': 'image/svg'});
  readStream.pipe(res);
}).listen('3000');