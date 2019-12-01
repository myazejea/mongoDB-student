var express = require('express');
var bodyParser = require('body-parser');
//var routes = require('./routes/student');
var session = require('express-session');
var mongodb = require('mongodb');
var mocha = require('mocha');
var assert = require('assert');
var path = require('path');
var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
var count = 0;
var app = express();
var StudentInfo = require('./models/studentInfo');
var mongoose = require('mongoose');
var assert = require('assert');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
//ES6 Promise stops the "DeprecationWarning" by installing this library

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));//This is middleware to use or get styles.css code to be used
//app.use('/student',routes);

app.get('/', function(req, res){
   var data = {qs: req.query, count: count};
    res.render('index', {qs: req.query, count: count});
});

app.post('/', urlencodedParser, function(req, res){
  console.log(req.body)
  var stud = new StudentInfo({
    firstName: req.body.firstname,
    lastName: req.body.lastname
  });
  stud.save().then(function(){
    assert(stud.isNew === false);
  });
  count++;
  res.render('index-success', {data: req.query});
});
//Get home page
app.post('/views/index-success', function(req, res){
  dbConn.then(function(db){
    delete req.body._id;//for safety reasons
    db.collection('feedbacks').insertOne(req.body);
  });
  res.send('Data recieved:\n' + JSON.stringify(req.body));
  res.render('index', {qs: req.query, count: count});
});
app.get('/views/addedStudentPage', function(req, res){
  res.render('addedStudentPage', {data: req.query});
});
app.get('/views/savedStudents', function(req, res){
  res.render('savedStudents', {data: req.query});
});
// app.post('views/savedStudents', function(){
//
// });
app.get('/views/index-success', function(req, res){
  // dbConn.then(function(db){
  //   db.collection('feedbacks').find({}).toArray().then(function(feedbacks){
  //     res.status(200).json(feedbacks);
  res.render('index-success', {data: req.query});

//   });
 });

app.use(function(req, res, next){
  if(req.method == "POST"){
     var count = req.session.count;
     console.log(count);
  }
  next();
});

app.get('/', (req, res, next) => {
    res.sendStatus(200);
    next();
});

app.listen(process.env.port || 4000, function(){
  console.log('app started!');
  console.log('listening for requests');
});
