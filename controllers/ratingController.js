const db = require("../models");

module.exports = {
  //route for getting smoothy of the week
  getROW: function(req, res){
    db.Ratings
      .aggregate([{$group: {_id: "$recipeId", avgRating: {$avg: "$rating"}}}, {$sort: { avgRating: -1 }}])
      .sort({ $avgRating: -1 })
      .then(dbModel=>resJson(dbModel))
      .catch(err=>res.status(422).json(err));
  },
  getRating: function(req, res){
    db.Ratings
      .aggregate([{$group: {_id: req.params.id, avg: {$avg:"$rating"}}}])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addRating: function(req, res){
    db.Ratings
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateRating: function(req, res){
    db.Ratings
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};