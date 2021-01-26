const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
  title: { type: String, trim: true, required: "Title is Required" },
  image: { type: String, default: "http://res.cloudinary.com/dhfx4qopy/image/upload/v1611611835/foo/wq1oocwskdirpyay8eak.png"},
  type: { type: String, required: true },
  categories: Array,
  ingredients: Array,
  prep: Array,
  rating: { type: Schema.Types.ObjectId, ref: "Rating" },
  forkedRecipeId: { type: Schema.Types.ObjectId, ref: "Recipe" },
  authorId: { type: Schema.Types.ObjectId, ref: "User" },
  createdDate: { type: Date, default: Date.now },
  lastEditedDate: Date,
  editComments: Array
});

recipeSchema.methods.lastEdited = function() {
  this.lastEditedDate = Date.now();
  return this.lastEditedDate;
};

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;