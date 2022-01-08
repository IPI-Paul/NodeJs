const { globalLoc } = require('../globals');
const express = require(globalLoc + 'express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

// select section then shift alt down arrow to copy down
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));