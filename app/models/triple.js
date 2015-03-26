var stardog = require("stardog"),
env = process.env.NODE_ENV || 'development',
config = require('../../config/config')[env];

var conn = new stardog.Connection();

var Triple = function(data){
	this.data = data;
}

Triple.prototype.data = {};


Triple.listTriples = function(callback){
	console.log('list triples');
}

Triple.showTriple = function(id,callback){
	console.log('show triple');
}

Triple.createTriple = function(callback){
	console.log('create triple');
}

Triple.editTriple = function(id,callback){
	console.log('edit triple');
}

Triple.deleteTriple = function(id,callback){
	console.log('delete triple');
}

module.exports = Triple;
