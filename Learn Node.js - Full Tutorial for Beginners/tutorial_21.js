const globals = require('./globals');
const public = globals.public;
const fs = require('fs');

let oldFolder = public + 'tutorial\\';
let oldFile = globals.filePath(oldFolder, 'tutorial_19', 'txt');

fs.unlink(oldFile, (err) => {
  if (err)
    console.log(err);
  else {
    fs.rmdir(oldFolder, (err) => {
      if (err)
        console.log(err);
      else
        console.log(`Deleted folder: \n${oldFolder}`);
    });
  }
})
