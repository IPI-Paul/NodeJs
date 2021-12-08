const globals = require('./globals');
const public = globals.public;
const fs = require('fs');

let oldFolder = public + 'example\\';

fs.readdir(oldFolder, (err, files) => {
  if(err)
    console.log(err);
  else {
    for (let file of files) {
      fs.unlink(oldFolder + file, (err) => {
        if (err)
          console.log(err);
        else
          console.log(`Successfully deleted file: \n${file}`);
      });
    }
    fs.rmdir(oldFolder, (err) => {
      if (err)
        console.log(err);
      else
        console.log(`Deleted folder: \n${oldFolder}`);
    });
  }
});