// var mocha = require('mocha');
// var assert = require('assert');
// var StudentInfo = require('../models/studentInfo');
//
// describe('Finding records', function(){
//
// var char;
// beforeEach(function(done){
//
//   char = new StudentInfo({
//    firstName: 'Mario',
//    lastName: 'Espezito'
//   });
//   char.save().then(function(){
//     assert(char.isNew === false);
//     done();
//   });
// });
//
//   //Create tests
//   it('Find one record from the database', function(done){
//     StudentInfo.findOne({firstName: 'Mario'}).then(function(result){
//       assert(result.firstName === 'Mario');
//       done();
//     });
//
//   });
//
//   it('Find one record from ID from the database', function(done){
//     StudentInfo.findOne({_id: char._id}).then(function(result){
//       assert(result._id.toString() === char._id.toString());
//       done();
//     });
//
//   });
//
// });
