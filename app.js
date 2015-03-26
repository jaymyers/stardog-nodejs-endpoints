var restify = require('restify')
, fs = require('fs');
var env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env];
  
var app = restify.createServer({name:'stardognodeapi', version:'0.0.1', });

app.use(restify.acceptParser(app.acceptable));
app.use(restify.authorizationParser());
app.use(restify.dateParser());
app.use(restify.queryParser());
app.use(restify.jsonp());
app.use(restify.gzipResponse());
app.use(restify.bodyParser());

require('./config/routes')(app);

var port = process.env.PORT || 1551
app.listen(port, function(){
	console.log('%s listening at %s', app.name, app.url);
});
app.pre(restify.pre.userAgentConnection());

exports = module.exports = app;
