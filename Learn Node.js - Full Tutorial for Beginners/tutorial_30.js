const globals = require('./globals');
const public = globals.public;
const txt = public + 'txt\\'; 
const gz = public + 'gz\\';
const  fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();

let filePath = gz + 'tutorial_27.gz';
let newFile = globals.filePath(txt, __filename, 'txt');

const readStream = fs.createReadStream(filePath);
const writeStream = fs.createWriteStream(newFile);
readStream.pipe(gunzip).pipe(writeStream);