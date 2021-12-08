const globals = require('./globals');
const txt = globals.txt;
const fileName = globals.fileName(__filename);
const fs = require('fs');

const filePath = txt + 'tutorial_13.txt';
let newFile = txt + fileName + '.txt';
fs.rename(filePath, newFile, (err) => {
  if (err)
    console.log(err);
  else
    console.log(`Successfully renamed the file From: \n${filePath} \nTo: \n${newFile}`);
});