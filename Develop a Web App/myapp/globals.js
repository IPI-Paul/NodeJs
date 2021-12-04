const global = require('child_process').execSync('npm root -g').toString().trim().replace(/\\/g, '\\\\') + '\\\\';

module.exports = global;