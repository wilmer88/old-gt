function Child(joto, monkeyAge ) {
  if (typeof joto !== "string" || !joto.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }

  if (typeof monkeyAge  !== "number" ||  monkeyAge  < 0) {
    throw new Error("Expected parameter 'age' to be a non-negative number");
  }

  this.joto = joto;
  this.monkeyAge = monkeyAge ;
}

module.exports = Child;
