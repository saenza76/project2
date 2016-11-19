var path = require('path');
var orm = require('../config/orm.js')

module.exports = function(app){


	// returns a JSON with all of the ingredients in the database
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