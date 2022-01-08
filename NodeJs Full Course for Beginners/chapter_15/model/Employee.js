const { globalLoc } = require('../../globals');
const mongoose = require(globalLoc + 'mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Employee', employeeSchema)