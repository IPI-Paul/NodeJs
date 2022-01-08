const { globalLoc } = require('../../../globals');
const express = require(globalLoc + 'express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController_01');
const verifyJWT = require('../../middleware/verifyJWT');

router.route('/')
  .get(verifyJWT, employeesController.getAllEmployees)
  .post(employeesController.createNameEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

  router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;