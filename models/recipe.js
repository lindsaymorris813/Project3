const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    title: { type: String, trim: true, required: "Title is Required" },
    image: { type: String},
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

UserSchema.methods.lastEdited = function() {
    this.lastEditedDate = Date.now();

    return this.lastEditedDate;
};

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;