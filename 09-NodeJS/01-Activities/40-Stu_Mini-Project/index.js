const inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
     type:"input",
     name: "name",
    message: "what is your name",
 },
]).then(responde => {

}).catch(err =>{
    console.log(err);
})
// {
//     type:"input",
//     name: "location",
//     message: "where do you live?",
// },
// {
//     type:"input",
//     name: "hobby",
//     message: "what is your hobby?",
// },

// ]).then(function(data)){
//     console.log(data);
//     fs.appendFile("index.html", JSON.stringify(data), function(err)){
//         if(err){
//             return console.log(err);
//         }console.log("succeffully wrote file")
//         }
//     }
// });
// });