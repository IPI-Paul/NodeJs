const public = require('./globals').public;
const fs = require('fs');

let newFolder = public + 'tutorial';
fs.mkdir(newFolder, (err) => {
  if (err)
    console.log(err);
  else
    console.log(`Folder successfully created: \n${newFolder}`);
});