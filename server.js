var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'recipe_users'
});

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('public'));
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };

    console.log('connected as id ' + connection.threadId);

})

//root get route
app.get('/', function(req, res) {


});


//post route -> back to home
app.post('/create', function(req, res) {


});

app.listen(PORT, function() {
    console.log('Listening on PORT ' + PORT);
});
