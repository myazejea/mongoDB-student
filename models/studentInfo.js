var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a Schema
var StudentInfoSchema = new Schema({
  firstName: String,
  lastName: String
});

//Create a Model
var StudentInfo = mongoose.model('studentInfo', StudentInfoSchema);

module.exports = StudentInfo;
