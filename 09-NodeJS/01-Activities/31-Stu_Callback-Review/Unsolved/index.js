const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = ["dog shit"];
  const cats = [];
 for (let i = 0; i < animalJSON.length; i++){
   if (animalJSON[i].species === "dog"){
     dogs.push(animalJSON[i]);
}
else if (animalJSON[i].species === "cat"){
  cats.push(animalJSON[i]);
}
 }
  fs.writeFile("dogs.json", JSON.stringify( dogs, null, 2), function (err){
    if (err) throw err;
    console.log("boy you did it")
  });
});


 const dogs = animalJSON.filter((animal) => animal.species === "dogs");