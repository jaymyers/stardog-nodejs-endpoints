var stardog = require("stardog"),
env = process.env.NODE_ENV || 'development',
config = require('../../config/config')[env];

var conn = new stardog.Connection();
conn.setEndpoint(config.db.server);
conn.setCredentials(config.db.user,config.db.pass);

var Triple = function(data){
	this.data = data;
}

Triple.prototype.data = {};


Triple.listTriples = function(db,callback){
	// var self = this;
	conn.query({
	        database: db,
	        query: "select distinct ?s where { ?s ?p ?o }",  
	        limit: 10,
	        offset: 0
	    },
	    function (err,data) {
			if(err) return callback(err);
			callback(null,"data");
	        // console.log(data.results.bindings);
	    }
	);
	
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
