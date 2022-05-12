// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operator/:numOne/:numTwo", function (req, res) {
  // TODO parse out the variables from the request
  console.log(req.params);
  const operation = req.params.operation;
  const numOne = parseInt(req.params.numOne);
  const numTwo = parseInt(req.params.numTwo);
  // Parameters are received from the URL

  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
  // numOne = parseInt(numOne);
  // numTwo = parseInt(numTwo);
  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      result = numOne + numTwo;
      // Add your logic here. Pun intended.
      break;
    case "subtract":
      result = numOne - numTwo;
      // Subtract logic
      break;
    case "multiply":
      result = numOne * numTwo;
      // Multiply
      break;
    case "divide":
      result = numOne / numTwo;
      // Divide
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
