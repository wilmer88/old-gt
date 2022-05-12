console.log("fuck");
var drink = document.getElementById("drink-options");

for (i = 0; i < drink.lenght; i++) {
  var bebida = document.createElement("p");
  bebida.textContent = drink[i];
  drink.append(bebida);
}
