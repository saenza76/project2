var path = require('path');
var orm = require('../config/orm.js')

module.exports = function(app){

	// when a post is made to /delete orm.deleteBurger will change a burger to eaten
	app.post('/delete', function (req, res) {
		console.log('Server Log')
	    console.log(req.body.id)
	    orm.deleteBurger(req.body.id)
	});

	// returns a JSON with all of the burgers in the database
	app.get('/api', function (req, res) {
	    orm.selectAll(function(x){
	    	res.json(x);
	    });
	});

	// calls orm.addToDatebase which will add the burger
	app.post('/api', function (req, res) {
		orm.addToDatabase(req.body.name)
	});

}