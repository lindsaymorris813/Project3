const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const User = require("./models/user");
const routes = require("./routes");
const app = express();
const path = require("path");
const {existsSync, mkdirSync} = require("fs");

require("dotenv").config();

//----------Connection to Mongoose------------------
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
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(cookieParser("catnip"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
//--------------------------------Middleware End--------------------------------------------------

//------------------------------------Start API Routes-------------------------------------
app.use(routes);
//-----------------------------End API Routes-----------------------------------------

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  var dir = path.join(__dirname,"tmp/");
  if(!existsSync(dir)) mkdirSync(dir, 0744);
});
