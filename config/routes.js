module.exports = function(app) {
	/**
	* standard API endpoints
	*/
	var api = require('../app/controllers/api');
	// list all facts
	app.get('/facts', api.list);
	// get fact by id
	app.get('/facts/:id', api.show);
	// create new fact
	app.post('/facts/new', api.create);
	// edit facts
	app.put('/facts/:id/edit', api.edit);
	// delete fact -- careful!
	app.del('/facts/:id/delets', api.delete);
	
	
}