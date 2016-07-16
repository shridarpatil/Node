var mysql = require('mysql');
var connection = mysql.createConnection({
	host	: 'localhost',
	user	:  'root',
	password	:'r00t',
	database	:'wordpress' 
});

connection.connect(function(err){
	if(err!=null){
		console.log("Error comnnecting to db"+err);
	}
	else{
		console.log("Connected to database");
	}
});

module.exports = connection;