const { globalLoc } = require('../globals');
const { format } = require(globalLoc + 'date-fns');
console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));