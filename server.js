const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const User = require("./models/user");
const routes = require("./routes");
const app = express();
const path = require("path");
const {existsSync, mkdirSync} = require("fs");

require("dotenv").config();

//Connection to Mongoose - attn @V/Lindsay
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/smoothiedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
},
() => {
  console.log("mongoose is connected");
});

//--------------------------------Middleware Start----------------------------------------
app.use(bodyParser.json({limit:"10mb"}));
app.use(bodyParser.urlencoded({limit:"10mb", extended: true }));

app.use(session({
  secret: "catnip",
  resave: true,
  saveUninitialized: true
}));
app.use(cookieParser("catnip"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
//--------------------------------Middleware End--------------------------------------------------

//------------------------------------Routes-------------------------------------

app.post("/api/login", (req, res, next) => {
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
});


app.post("/api/signup",(req, res) => {
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
});
//-----------------------------End of Routes-----------------------------------------

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  var dir = path.join(__dirname,"tmp/");
  if(!existsSync(dir)) mkdirSync(dir, 0744);
});
