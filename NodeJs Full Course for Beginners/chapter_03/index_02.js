const { globalLoc } = require('../globals');
const { format } = require(globalLoc + 'date-fns');
const { v4: uuid } = require(globalLoc + 'uuid');
console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

// generates a new uuid every run
console.log(uuid());
