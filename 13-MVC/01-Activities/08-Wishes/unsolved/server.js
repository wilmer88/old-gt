const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//this is the mysql/data connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "morter706",
    database: "wishy_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });
//api call to broswer to see if server  is working

app.get("/api/config", (req, res) => {
res.json({
    listo: true
})});
//get rout to the data in mysql
app.get("/", (req, res) =>{
consoletable(res)
connection.query("SELECT * FROM wish", (err, data) =>{
         if(err) throw err;
        console.log(data)
    //})
    //res.render("index");
})});



app.listen(PORT, () => {
    console.log(`app is going on http://localhost:${PORT}`)
})

