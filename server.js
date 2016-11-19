var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// connection and orm
var connection = require('./config/connection.js');
var orm = require('./config/orm.js');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('public'));
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// requriing of the api routes
require('./routing/api-routes.js')(app);

app.listen(PORT, function() {
    console.log('Listening on PORT ' + PORT);
});
