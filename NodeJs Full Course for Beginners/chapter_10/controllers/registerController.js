const { globalLoc } = require('../../globals');
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require(globalLoc + 'bcrypt');

const usersDb = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
};

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.'});
  // check for duplicate user names in the database
  const duplicate = usersDb.users.find(person => person.username === user);
  if (duplicate) return res.sendStatus(409); // Conflict
  try {
    // encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);
    // store  the new user
    const newUser = { "username": user, "password": hashedPwd };
    usersDb.setUsers([...usersDb.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'model', 'users.json'),
      JSON.stringify(usersDb.users)
    );
    console.log(usersDb.users);
    res.status(201).json({ 'success': `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ 'message': err.message })
  }
}

module.exports = { handleNewUser }