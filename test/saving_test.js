var mocha = require('mocha');
var assert = require('assert');
var StudentInfo = require('../models/studentInfo');

describe('Saving records', function(){
beforeEach(function(done){
  var stud1 = new StudentInfo({
    firstName: 'Mark',
    lastName: 'bla'
  });
  stud1.save().then(function(){
    assert(stud1.isNew === false);

  });
  var stud2 = new StudentInfo({
    firstName: 'Mark',
    lastName: 'Sado'
  });
  stud2.save().then(function(){
    assert(stud2.isNew === false);

  });
  var stud3 = new StudentInfo({
    firstName: 'Abby',
    lastName: 'Stone'
  });
  stud3.save().then(function(){
    assert(stud3.isNew === false);
  });
  var stud4 = new StudentInfo({
    firstName: 'Lenny',
    lastName: 'Rock'
  });
  stud4.save().then(function(){
    assert(stud4.isNew === false);
  });
  done();
});

  //Create tests
  it('Saving records to database', function(done){

   done();
  });
});
