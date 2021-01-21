const db = require("../models");

module.exports = {
  //route for creating a recipe
  addRecipe: function(req,res){
    db.Recipe
      .create(req.body)
      .then(dbModel=>res.json(dbModel))
      .catch(err=>res.status(422).json(err));
  },
  //route to return recipies based on search categories
  searchRecipe:function(req,res){
    db.Recipe
      .findAll()//have to identify how to add in search criteria here.
      .then(dbModel=>res.json(dbModel))
      .catch(err=>res.status(422).json(err));
  }

};