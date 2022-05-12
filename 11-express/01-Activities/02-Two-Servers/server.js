var http = require("http");

var PORT_ONE = 7000;

var PORT_TWO = 7500;

function handleRequestTwo(request, response){
    response.end("only the weak die - wilmer");
    
};
function handleRequestOne(request, response){
    response.end("dont give up on finding someone");
    
};
 

 const serverOne = http.createServer(handleRequestOne);
 const serverTwo = http.createServer(handleRequestTwo);

 serverOne.listen(PORT_ONE,  function(){
     console.log(`server listening on http://localhost:${PORT_ONE}`);
 });


 serverTwo.listen(PORT_TWO, function(){
    console.log(`server listening on http://localhost:${PORT_TWO}`);
});



 