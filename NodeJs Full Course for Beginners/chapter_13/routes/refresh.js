const { globalLoc } = require('../../globals');
const express = require(globalLoc + 'express');
const router = express.Router();
const refreshTokenController = require('../controllers/refreshTokenController');

router.get('/', refreshTokenController.handleRefreshToken);

module.exports = router;