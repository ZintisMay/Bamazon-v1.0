var mysql = require('mysql');
var line = "";
var fs = require('prompt');
prompt.start();

var connection = mysql.createConnection({
	host: "LocalHost",
	port: 3306,
	user: 'root',
	password: "",
	database: "Bamazon"
});

//update table with current number

//give a running total of all transactions
console.log();
console.log("Would you like to buy something?");
console.log();

connection.connect(function(err){
	// if there is an error log it
	if (err) {
		console.log("error!");
		console.error('error connecting: ' + err.stack);
		return;
	}
	// if not error console.log connected
	// console.log("Success!");
	// console.log('connected as id: ' + connection.threadID);
	// console.log(connection);

});

connection.query("SELECT * FROM products", function(err, res){
	if (err) throw err;

	// console.log(res);

	// console.log(res[0].ItemID + ": " + res[0].ProductName + ': $' + res[0].Price + "(Stock: " + res[0].StockQuantity + ")");

	// console.log(res.length);

	for(q=0;q<res.length;q++){

		displayitem(q,res);
		line="";
	}

	// addspaces(20,line);
	// line += res[0].ProductName;

});

//this function will update an item, you pass in the item id = k and quantity = j //**
function updatequery(k, j){

	connection.query("UPDATE products SET StockQuantity = " + j + " WHERE ItemID =" + k + '"', function(err, res){

		if (err) throw err;

		console.log("Updated");

		connection.query("SELECT * FROM products WHERE ItemID = " + k + '"', function (err, res){

			if (err) throw err;

			console.log("Updated");

			displayitem(0,res);
		});
	});
} //**

//this function will add spaces to item y, of array position x
function displayitem(x,y){

	line += "ID: " + y[x].ItemID;

	addspaces(7,line);
	line += y[x].ProductName;

	addspaces(35,line);
	line += "$" + y[x].Price;

	addspaces(45,line);
	line += "#" + y[x].StockQuantity;

	console.log(line);
	console.log();
}

//this just adds a bunch of spaces, called by the displayitem function only
function addspaces(x){

	for (z = line.length;z < x; z++)
	{line+=" ";} 
	
}

//this function ques the user to enter an item and number successively, and checks to make sure they are valie. 
function dosomething(){

	var theID = 0;
	var theQuantity = 0;
	var change = 0;

	var stock = 0;
	var cost = 0;

	console.log("What would you like? Enter the ID number:");

	prompt.get(['ID'],function(err, result){

		if (result.ID.length != 2 || isInteger(result.ID) == false){

			console.log("Try again");

			dosomething();

		} else {

			theID = result.ID;

			console.log(theID);

			console.log("How much would you like?");

			howmuch();
		}



	});
}

//this is a subfunction of dosomething, it asks how many of them they want and re-calls itself if invalid
function howmuch(){
	console.log("howmuchbegins");
	prompt.get(['quantity'], function(err, result){
			
			//sets global to the result
			theQuantity = result.quantity;

			if(theQuantity <= 0 || isInteger(theQuantity) == false){
				console.log("Try again");
				howmuch();
			}else if(isInteger(theQuantity>)) {

			}else{
				console.log("howmuch b");
				connection.query('SELECT * FROM products WHERE ItemID = ' + theID, function(err, res){

					change =  res[0].StockQuantity - change;


				});


				
				//**
			}
	});	
}