const Rating = require("../models/rating");

module.exports = {
  //route for getting smoothy of the week
  getROW: function(req, res){
    Rating
      .aggregate([{$group: {_id: "$recipeId", avgRating: {$avg: "$rating"}}}, {$sort: { avgRating: -1 }}])
      .sort({ $avgRating: -1 })
      .then(dbModel=>resJson(dbModel))
      .catch(err=>res.status(422).json(err));
  },
  getRating: function(req, res){
    Rating
      .aggregate([{$group: {_id: req.params.id, avg: {$avg:"$rating"}}}])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addRating: function(req, res){
    Rating
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateRating: function(req, res){
    Rating
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};