const globals = require('./globals');
const globalLoc = globals.globalLoc;
const express = require(globalLoc + 'express');
const path = require('path');
const app = express();

let fileName = globals.fileName(__filename);

app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/:userQuery', (req, res) => {
  res.render(fileName, {
    data: {
      userQuery: req.params.userQuery,
      searchResults: ['book1', 'book2', 'book3'],
      loggedIn: true,
      username: 'lkjslkjdf'
    }
  });
});

app.listen(3000);
console.log('Server is running on port 3000.')
