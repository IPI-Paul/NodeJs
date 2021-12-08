const txt = require('./globals').txt;
const fs = require('fs');

const filePath = txt + 'tutorial_14.txt';
fs.appendFile(filePath, 'Some data being appended', (err) => {
  if (err)
    console.log(err);
  else
    console.log(`Successfully appended data to the file: \n${filePath}`);
});