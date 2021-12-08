const global = require('./globals').global;
const _ = require(global + 'lodash');
let example = _.fill([1, 2, 3, 4, 5], 'banana', 1, 4)
console.log(example);