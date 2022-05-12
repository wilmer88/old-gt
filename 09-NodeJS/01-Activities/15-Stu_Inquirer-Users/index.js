
var fs = require("fs");

console.log(process.argv[2]);

var inquirer = require("inquirer");
var fs = require("fs");
inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "what is your name",
    },
    {
        type: "checkbox",
        name: "hoes",
        message: "how many hoes",
        choices: ["1", "2", "3", "four"]
    },
    {
        type: "list",
        name: "contact",
        message: "how do you get money",
        choices:["slaping hoes", "robing hoes", "talking to hoes"]

    },

]).then(function(data){
   console.log(data)
})
fs.writeFile("user.json", JSON.stringify(data, null, "\t"), function(err){
    if (err){
        return console.log(err);
    }
    console.log("it was succesful");
});


