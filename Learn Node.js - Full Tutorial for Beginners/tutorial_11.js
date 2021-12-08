const txt = require('./globals').txt;
const fs = require('fs');

// Create a file
const filePath = txt + 'tutorial_11.txt';
fs.writeFile(filePath, 'this is an example', (err) => {
  if (err)
    console.log(err);
  else
    console.log(`File successfully created: \n${filePath}`);
})