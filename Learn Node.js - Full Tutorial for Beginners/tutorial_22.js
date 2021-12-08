const globals = require('./globals');
const public = globals.public;
const fs = require('fs');

let oldFolder = public + 'example\\';

fs.readdir(oldFolder, (err, files) => {
  if(err)
    console.log(err);
  else
    console.log(files);
});