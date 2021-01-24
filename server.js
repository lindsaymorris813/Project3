const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Using session to keep track of our User's that are logged in.
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

//------------------------------------Start API Routes-------------------------------------
app.use(routes);
//-----------------------------End API Routes-----------------------------------------

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
