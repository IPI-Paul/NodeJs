const { globalLoc } = require('../../globals');
const jwt = require(globalLoc + 'jsonwebtoken');
require(globalLoc + 'dotenv').config();

const usersDb = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
};

const handleRefreshToken = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  const foundUser = usersDb.users.find(person => person.refreshToken === refreshToken);
  if (!foundUser) return res.sendStatus(403);  // Forbidden
  // evaluate jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
      const accesToken = jwt.sign(
        { 'username': decoded.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '30s' }
      );
      res.json({ accesToken });
    }
  );
};

module.exports = { handleRefreshToken };