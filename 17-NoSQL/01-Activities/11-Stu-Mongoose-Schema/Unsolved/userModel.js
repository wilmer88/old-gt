const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  username:{
    type: String,
    trim: true,
    requiered: "Username is required",
  },
  password: {
    type: String,
    trim: true,
    validate: [({ length }) => length >= 6, "password shuld be longer"],
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "please use a valid email"],
  },
  userCreate: {
    type: Date,
    default: Date.now,
  }
  
  // CODE HERE

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
