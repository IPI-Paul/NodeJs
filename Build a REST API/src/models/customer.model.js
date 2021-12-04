const global = require('child_process').execSync('npm root -g').toString().trim().replace(/\\/g, '\\\\') + '\\\\';
let mongoose = require(global + 'mongoose');

const server = 'localhost:27017';
const database = 'YourDatabaseName';
const user = 'YourUserName';
const password = 'YourPassword';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let CustomerSchema = new mongoose.Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true
	}
});

module.exports = mongoose.model('Customer', CustomerSchema);
