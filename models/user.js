const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var bcrypt = require("bcryptjs");
//Removed Required Fields for FN, LN;

const userSchema = new Schema ({
  email: { type: String, unique: true, required: "Please enter a Email" },
  password: { type: String, required: "Please enter a Password" },
  firstName: { type: String, required: "Please enter a First Name"},
  lastName: { type: String, required: "Please enter a Last Name"},
  image: { type: String, default: "http://res.cloudinary.com/dhfx4qopy/image/upload/v1611611912/foo/crdizfzdojhlkt6dpiy1.jpg"},
  birthday: { type: Date },
  bio: { type: String }
});

userSchema.methods.setFullName = function() {
  this.fullName = `${this.firstName} ${this.lastName}`;
  return this.fullName;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
