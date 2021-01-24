const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
  //Login route
  logIn: function(req, res, next) {


  },
  //signUp route for creating new user
  signUp: function(req,res){
    db.User
      .create(req.body)
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .then(dbModel => res.json(dbModel))
      .catch(err=>res.status(422).json(err));
  },
  //logout route for user
  logOut:function(req,res){

  },
  //route getting all your recipes
  getUserRecipes:function(req,res){
    db.Recipe
      .findAll({userID:req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err=>res.status(422).json(err));
  },
  //route delete recipe based on the user id and recipe id
  deleteRecipe:function(req,res){

  },



};