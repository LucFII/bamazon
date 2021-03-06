/* Notes:

-Add mock items to data base
-Display items for sale
-Inquire what user wants to buy
-Verify quantity of desired item
-Process request
-Deduct amount of items purchased from the over all item quantity
-Show user total price of items purchased

-Response object
*/

var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: "",
	database: "bamazondb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
  //runBamazon();
});


/*
function createProduct() {
    console.log("Inserting new products...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        product_name: "shake weight",
        department_name: "fitness",
        price: 19.99,
        stock_quantity: 999
      },
      function(err, res) {
        console.log(res.affectedRows + " products inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        //updateProduct();
      }
    );

    // logs the actual query being run
    console.log(query.sql);
};

function updateProduct() {
  console.log("Updating stock quantity of selected item...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: --
      },
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
      console.log(res.)
      // Call deleteProduct AFTER the UPDATE completes
      //deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

function deleteProduct() {
  console.log("Deleting all strawberry icecream...\n");
  connection.query(
    "DELETE FROM products WHERE ?",
    {
      flavor: "strawberry"
    },
    function(err, res) {
      console.log(res.affectedRows + " products deleted!\n");
      // Call readProducts AFTER the DELETE completes
      //readProducts();
    }
  );
};
*/


function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

function verifyQuantity() {
  inquirer
    .prompt([
      {
        name: "quantityCheck",
        type: "input",
        message: "How many would you like?"
      }
    .then(function(answer) {
      if (answer.quanityCheck < stock_quantity /* NEED Proper syntax */ ) {
        console.log("There is not enough inventory to fulfill your request");
      }
      else {
        purchaseItem();
      }
    }),

function buyProducts() {
  Var total = answer.quanityCheck * answer.action(Products.price);
  console.log("That will cost a total of " + total);
};

function purchaseItem() {
  console.log(Verifying Purchase);
};

function runBamazon() {

};

// RESTART



function displayProducts(){
    var query = "SELECT * FROM products";
    
    console.log("BAMAZON PRODUCTS FOR SALE")
    console.log("-------------------------")
      connection.query(query, function(err, res) {
        //if err throw err;
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].item_id + ". " + res[i].product_name + " ($" + res[i].price + ")");
        }
        buyPrompt(res);
    })
    
};