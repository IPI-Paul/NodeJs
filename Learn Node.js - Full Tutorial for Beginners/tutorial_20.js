const globals = require('./globals');
const public = globals.public;
const fileName = globals.fileName(__filename);
const fs = require('fs');

let newFolder = public + 'tutorial\\';
let newFile = globals.filePath(newFolder, fileName, 'txt');
fs.mkdir(newFolder, (err) => {
  if (err)
    console.log(err);
  else
    fs.writeFile(newFile, '123', (err) => {
      if (err)
        console.log(err);
      else
        console.log(`Successfully Created file: \n${newFile}`);
    });
});