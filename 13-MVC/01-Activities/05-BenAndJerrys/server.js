// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var icecreams = [
  { name: "vanilla", price: 10, awesomeness: 3 },
  { name: "chocolate", price: 4, awesomeness: 8 },
  { name: "banana", price: 1, awesomeness: 1 },
  { name: "greentea", price: 5, awesomeness: 7 },
  { name: "jawbreakers", price: 6, awesomeness: 2 },
  { name: "pistachio", price: 11, awesomeness: 15 },
];

// Routes
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/icecream/:name", (req, res) =>{
    for (let i = 0; i < icecreams.length; i++){
        if(icecreams[i] === req.params.name){
            console.log(icecreams[i]);
            res.render("index",{
                name: icecreams[i].name,
                price: icecreams[i].price,
                awesomeness: icecreams[i].awesomeness
            })
            
        }
    }

})

// app.get("/weekend", function (req, res) {
//   res.render("index", lunches[1]);
// });

// app.get("/lunches", function (req, res) {
//   res.render("all-lunches", {
//     foods: lunches,
//     eater: "david",
//   });
// });

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
