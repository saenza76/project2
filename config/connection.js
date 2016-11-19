// requiring dependencies
var mysql = require('mysql');

// setting up mySQL connection. 
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'fmysql',
    database: 'recipe_users'
});

// Connection with connection info. 
connection.connect(function(err){
    if (err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Exporting connection so that we can access it in other files. 
module.exports = connection;
