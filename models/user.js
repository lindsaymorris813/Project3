//Require Mongoose
const  mongoose = require("mongoose");

//Creating our User model
const Schema = mongoose.Schema; 
const user = new Schema(
    {
        email: {
            type: String, 
            trim: true, 
            required: "Enter a valid email address!", 
            minlength: 5, 
            maxlength: 15
        }, 
        password: {
            type: String, 
            required: true, 
            minlength: 5, 
            maxlength: 15
        }
    }
);
//Replace "user" with mongoDB name. - @V/Lindsay
const User = mongoose.model("User", user);

//Export User Model.
module.exports = User

// //Creating a custon method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in the our database.
// User.prototype.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };

// //Hooks are automatic methods that run during various phases of the User Model Lifecycle
// //In this case, before a User is created, we will automatically hash their password. 
// User.addHook("beforeCreate", user => {
//     user.password = bcrypt.hashSync(
//         user.password, 
//         bcrypt.genSaltSync(10),
//         null
//     );
// });