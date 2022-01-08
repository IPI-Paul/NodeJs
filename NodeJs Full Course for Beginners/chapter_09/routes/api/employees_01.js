const { globalLoc } = require('../../../globals');
const express = require(globalLoc + 'express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController_01');

router.route('/')
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNameEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

  router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;