const fsPromises = require('fs').promises;
const path = require('path');

const usersDb = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
};

const handleLogout = async (req, res) => {
  // On client, also delete the accessToken
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content  
  const refreshToken = cookies.jwt;
  
  // Is refreshToken in db?
  const foundUser = usersDb.users.find(person => person.refreshToken === refreshToken);
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true });
    return res.sendStatus(204);
  }
  
  // Delete refreshToken in the database
  const otherUsers = usersDb.users.filter(person => person.refreshToken !== foundUser.refreshToken);
  const currentUser = {...foundUser, refreshToken: ''};
  usersDb.setUsers([...otherUsers, currentUser]);
  await fsPromises.writeFile(
    path.join(__dirname, '..', 'model', 'users.json'), 
    JSON.stringify(usersDb.users)
  );
  
  res.clearCookie('jwt', { httpOnly: true}); // secure: true - only serves https
  res.sendStatus(204);
};

module.exports = { handleLogout };