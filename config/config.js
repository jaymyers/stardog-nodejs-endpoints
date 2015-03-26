var path = require('path')
  , rootPath = path.normalize(__dirname + '/..');

module.exports = {
	development: {
	    db: 'mongodb://localhost/noobjs_dev',
	},
	test: {
	    db: 'mongodb://54.214.39.69/pliant_test'
	}
}