// var pg = require('pg')
// var query = require('query')
var Sequelize = require('sequelize');
// var sequelize = new Sequelize('postgres://user:password@localhost/my_db');
// var express = require('express');
// var path = require('path');


var sequelize = new Sequelize({
	host: 'localhost',
	user: 'martinpham',
	dialect: 'postgres',
	port: 5432,
	database: 'people',
	host: 'localhost',

});


var Person = sequelize.define('person',{
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING,

});


var initialize = {
	initialize: function() {
	Person.sync()
		.then(function(){
			Person.create({
				firstName: 'Martin',
				lastName: 'Pham'
			});
			Person.create({
				firstName: 'Nate',
				lastName: 'Kohen'
			});
			Person.create({
				firstName: 'Lester',
				lastName: 'Loor'
			});
		});
	},

Person: Person,

  getAll: function(tableName, callback) {
    this.initialize();
    Person.findAll().then(function(rows) {
      callback(rows);
    });
  },

  findById: function(id, tableName, callback) {
    this.initialize();
    Person.findById(id).then(function(row) {
      callback(row);
    });
  }
};


module.exports = initialize;


