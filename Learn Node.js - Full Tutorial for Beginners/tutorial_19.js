const public = require('./globals').public;
const fs = require('fs');

let newFolder = public + 'tutorial';
fs.rmdir(newFolder, (err) => {
  if (err)
    console.log(err);
  else
    console.log(`Successfully deleted the folder: ${newFolder}`);
});
