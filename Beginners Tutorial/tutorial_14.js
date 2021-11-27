const fs = require('fs');

const read_string = fs.readFileSync('./sources/txt/tutorial_14.txt', 'utf-8');

console.log(read_string);

fs.writeFileSync('./sources/txt/tutorial_14a.txt', read_string);