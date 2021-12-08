const globals = require('./globals');
const public = globals.public;
const txt = public + 'txt';
const  fs = require('fs');

let filePath = globals.dirFile(txt, 0);
let newFile = globals.filePath(txt, __filename, 'txt');

const readStream = fs.createReadStream(filePath, 'utf8');
const writeStream = fs.createWriteStream(newFile);
readStream.on('data', (chunk) => {
  writeStream.write(chunk);
});