var mongoose = require('mongoose');
var mocha = require('mocha');
var assert = require('assert');
//connect to mongodb

//ES6 Promises global promise overwrites mongoose promise
mongoose.Promise = global.Promise;



//Connect to database before test are run
before(function(done){
  //Connect to database
  mongoose.connect('mongodb://localhost:27017/student');
  mongoose.connection.once('open', function(){
    console.log('Connection has been made.');
    done();
  }).on('error', function(error){
    console.log('Connection error:', error);
  });
});

//Drop the characters collection before each tests
beforeEach(function(done){
  //Drop the collection
  mongoose.connection.collections.studentinfos.drop(function(){
    done();
  });
});
