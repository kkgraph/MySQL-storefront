var mysql = require("mysql");
var inquirer = require("inquirer");
var figlet = require("figlet");
var colors = require("colors");
var Table = require("cli-table3");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Spl3ndid",
    database: "bamazon"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    figlet.text('Bamazon!', {
        font: 'Ghost' } ,
    function(err, data) {
        console.log(data.yellow);
    });
    setTimeout(queryProducts, 1000);
});


function queryProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        var table = new Table({
            head: ['Item ID', 'Product', 'Department', 'Price', 'Quanity']
          , colWidths: [10, 20, 20, 10, 10]
        });

        for (let i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            )
        }
        console.log(table.toString());
    });
    setTimeout(queryCustomer, 1000);
};

function queryCustomer() {
    inquirer
    .prompt([
        {
            name: "buy",
            type: "input",
            message: "Please add the ID for the item you'd like to purchase"
        },
        {
            name: "amount",
            type: "input",
            message: "How much would you like to buy?"
        }
])
  .then(answer => {
      const query = "Select * From products where item_id = ?";
      connection.query(query, answer.buy, function (err, res) {
          if (err) throw err;
          if (res.length > 0) {
              if (answer.amount > res[0].stock_quantity)  {
                  console.log("\r\n");
                  console.log("Sorry this amount is more than we have at this time. Please try again later.");
                  setTimeout(queryCustomer, 1000);
              } else {
                let newQuantity = (parseInt(res[0].stock_quantity) - parseInt(answer.amount));
                const query2 = "Update products set stock_quanitity = ? where item_id = ?";
                  connection.query(query2, newQuantity, answer.buy, function(err, res){
                      if (err) throw err;
                      console.log("\r\n");
                      console.log("Your purchase has been processed. Thank you for your business, hope to see you soon!");
                      console.log("\r\n");
                      connect.end();
                  }
                
                  );
              }
            
          } else {
              console.log("\r\n");
              console.log("Sorry we don't have that item in invetory");
              setTimeout(queryCustomer, 1000);
          }

      })
  });
}



