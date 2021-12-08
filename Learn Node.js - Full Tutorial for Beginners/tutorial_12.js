const globals = require('./globals');
const txt = globals.txt;
const fileName = globals.fileName(__filename);
const fs = require('fs');

// Create a file
let filePath = txt + fileName + '.txt';
fs.writeFile(filePath, 'this is an example', (err) => {
  if (err)
    console.log(err);
  else
    console.log(`File successfully created: \n${filePath}`);
    fs.readFile(filePath, (err, file) => {
      if (err)
        console.log(err);
      else
        console.log(file);
    })
})