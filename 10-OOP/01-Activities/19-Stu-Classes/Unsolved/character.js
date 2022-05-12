class Character {
  constructor(name, strength, hitPoints){
    if(!name){
      throw new error("your shit");
    }
    if()
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  
  
  
  // method which prints all of the stats for a character
  printStats() {
   
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`NAME has ${hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hitpoints <= 0){
      console.log(`${this.name} got beat up`);
      return false;
    }
    return true;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    console.log(`${this.name} attacked ${opponent.name} for ${this.strength}`);
    
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class

// Create an interval that alternates attacks every 2000 milliseconds
