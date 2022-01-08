const { globalLoc } = require('../../globals');
const express = require(globalLoc + 'express');
const router = express.Router();
const logoutController = require('../controllers/logoutController_Mine');

router.get('/', logoutController.handleLogout);

module.exports = router;