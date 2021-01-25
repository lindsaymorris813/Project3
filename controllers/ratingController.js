const { DateTime } = require("luxon");
const Rating = require("../models/rating");

module.exports = {
  //route for getting smoothy of the week
  getROW: function(req, res){
    const week = DateTime.local().minus({ days: 7 });
    console.log(week);
    Rating.aggregate([
      {$match: { dateOfRating: {$gte: week }}},
      {$group: {_id: "$recipeId", avgRating: {$avg: "$rating"}}}
    ])
      .then(dbModel=>res.json(dbModel))
      .catch(err=>res.status(422).json(err));
  },
  //route to get rating for recipe based on ID
  getRating: function(req, res){
    Rating
      .aggregate([{$group: {_id: "$recipeId", avgRating: {$avg:"$rating"}}}])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //route to add rating to a recipe based on ID
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