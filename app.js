var express = require('express');
var app = express();
var initialize = require('./initialize');
var myTable = initialize.Person;




// var getAll = function(req, res, next) {

//   initialize.getAll(myTable, function(data) {
//     console.log('getall: ', data);
//   });
//   next();
// };

var getByID = function(req, res, next) {
  initialize.findById(2, myTable, function(data) {
    console.log('getbyID: ', data);
  });
  next();
};

app.use(getAll);
app.use(getByID);

//finds alls
app.get("/test", function(req,res){
	myTable.findAll().then(data=>{
		res.json(data)
	})
})
//finds by id
app.get("/test", function(req,res){
	myTable.findById(1).then(data=>{
		res.json(data)
	})
})

app.get('*', function(req, res) {
  res.send('hello');
});

app.listen(3000, function() {
  console.log('listen at 3000');
});


