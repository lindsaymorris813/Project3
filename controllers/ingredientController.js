const db = require("../models");

module.exports = {
  //route for getting ingredients
  getIngredients: function(req,res){
    db.Ingredient
      .find({})//find all ingredients
      .then(dbModel=>resJson(dbModel))
      .catch(err=>res.status(422).json(err));
  },
  addIngredient: function(req,res) {
    db.Ingredient
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};