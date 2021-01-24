const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/user");

module.exports = {
  //Login route
  logIn: function(req, res, next) {
    passport.authenticate("local", (err, user) => {
      console.log("Authentication has began!");
      if (err) throw err;
      if (!user) {
        res.send("User does not exist");
      } else {
        req.logIn(user, err => {
          if (err) throw (err);
          res.send("Authentication successful");
          console.log("redirect");
        });
      }
    })(req, res, next);
  },
  //signUp route for creating new user
  signUp: function(req,res){
    User.findOne({ email: req.body.email },
      async function (err, doc) {
        if (err) throw err;
        if (doc) res.send("Sorry, this user already exists!");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);

          const newUser = new User({
            email: req.body.email,
            password: hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
          });
          await newUser.save();
          res.send("Account has been created!");
        }
      });
  }
};