const http = require("http");

const fs = require("fs");

const PORT = 8080;

const  server = http.createServer(handleRequest)


  function handleRequest(req, res) {
    var path = req.url;

    switch (path) {

  case "/":
    fs.readFile("./views/favorite.html", "utf8", function(err, data){
        console.log(data);
        res.end(data)
    });
    break;

  case "/badass":
    fs.readFile("./views/movie", "utf8", function(err, data){
        if(err) throw err
        console.log(data);
        res.end(data)
    });

  default:
    return display404(path, res);
  }

}


   server.listen(PORT, function() {
    console.log(`yo shit is working on: http://localhost:${PORT}`);
  });
console.log(data)
    
//     fs.readFile(__dirname + "/favorite.html", function(err, data) {
//       if (err) throw err;
      

//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
   
  
  
  
//   handleRequest()