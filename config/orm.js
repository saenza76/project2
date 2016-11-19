// requiring dependency
var connection = require('./connection.js');

// defining functions for later use
var orm = {

	// function for adding ingredient to database
	addToDatabase: function(ingredientname) {
		console.log(ingredientname + ' we added 1')
		var input = 'UPDATE ingredients SET searchCount = searchCount + 1 WHERE id = 1';
		connection.query(input, function(err, result) {
            if (err) throw err;
        });
	},

	// function which selects all burgers in the database
	selectAll: function(callback) {
		var input = 'SELECT * FROM ingredients';
		connection.query(input, function(err, result) {
            if (err) throw err;

            // console.log(result)
            callback(result)

        });
	}

};

// exporting orm so that we can access it in other files 
module.exports = orm;
