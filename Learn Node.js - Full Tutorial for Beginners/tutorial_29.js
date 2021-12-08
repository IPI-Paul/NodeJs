const globals = require('./globals');
const public = globals.public;
const txt = public + 'txt\\'; 
const gz = public + 'gz\\';
const  fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();

let filePath = globals.dirFile(txt, 0);
let newFile = globals.filePath(gz, __filename, 'gz');

const readStream = fs.createReadStream(filePath, 'utf8');
const writeStream = fs.createWriteStream(newFile);
readStream.pipe(gzip).pipe(writeStream);