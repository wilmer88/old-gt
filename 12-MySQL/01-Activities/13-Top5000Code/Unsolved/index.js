const mysql = require("mysql");
const inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "morter706",
    database: "bigdata_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
  });


function start(){
    inquirer.prompt([
        {
            name: "selection",
            message: "what would you like to do?",
            type: "list",
            choices: ["select song by artist"]
        }
    ]).then((selectedsong) =>{
        console.log(selectedsong)
    })

}