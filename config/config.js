var path = require('path')
  , rootPath = path.normalize(__dirname + '/..');

module.exports = {
	development: {
	    db: {
			server:'http://localhost:5820/',
			user: 'admin',
			pass:'admin'
		}
	},
	test: {
	    db: {
			server:'http://localhost:5820/',
			user: 'admin',
			pass:'admin'
		}
	}
}