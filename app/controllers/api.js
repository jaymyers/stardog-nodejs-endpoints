exports.list = function(req,res){
	
	res.send(200,'listing hals');
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
