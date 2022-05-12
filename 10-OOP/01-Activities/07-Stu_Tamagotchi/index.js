function Tamichi() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.outside = false;
  this.houseConditions = 100;
}

Tamichi.prototype.feed = function () {
  if (this.hungry) {
    console.log("pussy that was good");
    this.hungry = false;
    this.sleepy = true;
  } else {
    console.log("im good puh");
  }
};

Tamichi.prototype.sleep = function () {
  if (this.sleepy) {
    console.log("zzzzzzz");
    this.sleepy = false;
    this.bored = true;
    this.yearolder();
  } else {
    console.log("boy im ready");
  }
};

Tamichi.prototype.play = function () {
  if (this.bored) {
    console.log("lets play");
    this.bored = false;
    this.hungry = true;
  } else {
    console.log("not want to play");
  }
};
