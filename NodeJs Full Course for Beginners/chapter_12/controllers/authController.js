const { globalLoc } = require('../../globals');
const bcrypt = require(globalLoc + 'bcrypt');
const jwt = require(globalLoc + 'jsonwebtoken');
require(globalLoc + 'dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');

const usersDb = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
};

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.'});
  const foundUser = usersDb.users.find(person => person.username === user);
  if (!foundUser) return res.sendStatus(401);  // Unauthorised
  // evaluate password
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    const roles = Object.values(foundUser.roles);
    // create JWTs
    const accessToken = jwt.sign(
      { 
        'UserInfo': {
          'username': foundUser.username,
          "roles": roles 
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30s' }
    );
    const refreshToken = jwt.sign(
      { 'username': foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    // Saving refreshToken wih current user
    const otherUsers = usersDb.users.filter(person => person.username !== foundUser.username);
    const currentUser = { ...foundUser, refreshToken };
    usersDb.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'model', 'users.json'),
      JSON.stringify(usersDb.users)
    );
    res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };