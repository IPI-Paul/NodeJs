const fsPromises = require('fs').promises;
const path = require('path');
const usersCache = '../model/users.json';
let usersFl = require(usersCache);

const usersDb = {
  users: usersFl,
  delCache: () => {
    delete require.cache[require.resolve(usersCache)];
    usersFl = require(usersCache);
  },
  setUsers: function (data) { this.users = data }
};

const handleLogout = async (req, res) => {
  // On client, also delete the accessToken
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content  
  const refreshToken = cookies.jwt;
  
  // Is refreshToken in db?
  usersDb.delCache();
  const foundUser = usersFl.find(person => person.refreshToken === refreshToken);
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true });
    return res.sendStatus(204);
  }
  
  // Delete refreshToken in the database
  const otherUsers = usersFl.filter(person => person.refreshToken !== foundUser.refreshToken);
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