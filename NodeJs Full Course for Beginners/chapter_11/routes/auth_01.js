const { globalLoc } = require('../../globals');
const express = require(globalLoc + 'express');
const router = express.Router();
const authController = require('../controllers/authController_01');

router.post('/', authController.handleLogin);

module.exports = router;