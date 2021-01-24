const Recipe = require("../models/recipe");

module.exports = {
  //route for creating a recipe
  addRecipe: function(req,res){
    Recipe
      .create(req.body)
      .then(dbModel=>res.json(dbModel))
      .catch(err=>res.status(422).json(err));
  },
  //route to return recipies based on search categories
  searchRecipe: function(req,res){
    Recipe
      .findAll(req.query)//have to identify how to add in search criteria here.
      .sort({ rating: -1 })
      .then(dbModel=>res.json(dbModel))
      .catch(err=>res.status(422).json(err));
  },
  //delete a recipe based on its ID
  deleteRecipe: function(req, res) {
    Recipe
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //find a recipe based on its ID
  findRecipe: function(req, res) {
    Recipe
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //update recipe based on its ID
  updateRecipe: function(req, res) {
    Recipe
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
