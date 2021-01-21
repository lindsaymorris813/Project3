const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var bcrypt = require("bcryptjs");

const userSchema = new Schema ({
  email: { type: String, unique: true, required: "Please enter a Email" },
  password: { type: String, required: "Please enter a Password" },
  firstName: { type: String, required: "Please enter a First Name" },
  lastName: { type: String, required: "Please enter a Last Name" },
  image: { type: String },
  birthday: { type: Date },
  bio: { type: String }
});

userSchema.methods.setFullName = function() {
  this.fullName = `${this.firstName} ${this.lastName}`;
  return this.fullName;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
