const server = 'localhost:27017';
const database = 'notable';
const user = 'YourUserName';
const password = 'YourPassword';

module.exports = {
  url: `mongodb://${user}:${password}@${server}/${database}`
};
