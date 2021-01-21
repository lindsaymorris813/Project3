const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  recipeId: { type: Schema.Types.ObjectId, ref: "Recipe"},
  rating: { type: Number },
  dateOfRating: { type: Date }
});


const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;