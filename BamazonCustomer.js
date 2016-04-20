var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "LocalHost",
	port: 3306,
	user: 'root',
	password: "",
	database: "Bamazon"
});

//update table with current number

//give a running total of all transactions

console.log("Would you like to buy something?");


connection.connect(function(err){
	// if there is an error log it
	if (err) {
		console.log("error!");
		console.error('error connecting: ' + err.stack);
		return;
	}
	// if not error console.log connected
	console.log("Success!");
	console.log('connected as id: ' + connection.threadID);

});