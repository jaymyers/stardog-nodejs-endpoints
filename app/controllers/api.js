Triple = require('../models/triple.js');

exports.list = function(req,res){
	
	Triple.listTriples('hals',function(err,triples){
		res.send(200,err);
	});
	
}

exports.show = function(req,res){
	res.send(200,'showing hals');
	
}

exports.create = function(req,res){
	
	res.send(201,'creating hals');
}


exports.edit = function(req,res){
	res.send(201,'editing hals');
	
}

exports.delete = function(req,res){
	res.send(201,'deleting hals');
	
}
