const globals = require('./globals');
const public = globals.public;
const txt = public + 'txt';
const  fs = require('fs');

let filePath = globals.dirFile(txt, 0);

const readStream = fs.createReadStream(filePath, 'utf8');
readStream.on('data', (chunk) => {
  console.log(chunk);
});