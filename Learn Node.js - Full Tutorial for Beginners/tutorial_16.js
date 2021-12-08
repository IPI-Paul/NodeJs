const txt = require('./globals').txt;
const fs = require('fs');

const filePath = txt + 'tutorial_14.txt';
fs.unlink(filePath, (err) => {
  if (err)
    console.log(err);
  else
  console.log(`Successfully deleted the file: \n${filePath}`);
})