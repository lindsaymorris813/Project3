const Ingredient = require("../models/ingredient");

module.exports = {
  //route for getting ingredients
  getIngredients: function(req,res){
    Ingredient
      .find({})//find all ingredients
      .then(dbModel=>resJson(dbModel))
      .catch(err=>res.status(422).json(err));
  },
  addIngredient: function(req,res) {
    Ingredient
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};