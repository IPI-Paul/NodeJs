const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents_01');
const EventEmitter = require('events');
class Emitter extends EventEmitter {};
// initialize the object
const myEmitter = new Emitter();
const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  let src;
  if (req.url === '/' || req.url === 'index.html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    src = path.join(__dirname, 'views', 'index.html');
    fs.readFile(src, 'utf8', (err, data) => {
      res.end(data);
    });
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*
myEmitter.on('log', (msg) => logEvents(msg));
myEmitter.emit('log', 'Log event emitted!');
*/