const Rating = require("../models/rating");

module.exports = {
  //route for getting smoothy of the week
  getROW: function(req, res){
    Rating
      .aggregate([{$match: { dateOfRating: {$gt: new Date(Date.now() - 12096e5)}}},
        {$group: {_id: "$recipeId", avgRating: {$avg: "$rating"}}}, {$sort: { avgRating: -1 }}])
      .then(dbModel=>resJson(dbModel))
      .catch(err=>res.status(422).json(err));
  },
  getRating: function(req, res){
    Rating
      .aggregate([{$group: {_id: "$recipeId", avgRating: {$avg:"$rating"}}}])
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
      .findOneAndUpdate({ _id: {where: { recipeId: req.params.id, userId: req.user.id }}}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};