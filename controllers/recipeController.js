const Recipe = require("../models/recipe");
const mongoose = require("mongoose");

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
      .find(req.query)
      .then(dbModel=> {
        console.log(req);
        res.json(dbModel);
      })
      .catch(err=>res.status(422).json(err));
  },
  //delete a recipe based on its ID
  deleteRecipe: function(req, res) {
    Recipe
      .findOneAndDelete({ _id: req.params.id })
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
  },
  //find user recipes by Author
  getUserRecipes: function(req, res) {
    const objId = mongoose.Types.ObjectId(req.params.id);
    console.log(objId);
    Recipe
      .find({authorId: objId})
      .then((dbModel) => {
        res.json(dbModel);
        console.log(req.user);
      })
      .catch(err => res.status(422).json(err));
  }
};
