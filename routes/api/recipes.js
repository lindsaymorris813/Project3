const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");
const ratingController = require("../../controllers/ratingController");

// Matches with "/api/recipes"
router.route("/")
  .get(recipeController.searchRecipe)
  .post(recipeController.addRecipe);

// Matches with "/api/recipes/:id"
router.route("/:id")
  .get(recipeController.findRecipe)
  .put(recipeController.updateRecipe)
  .delete(recipeController.deleteRecipe);

router.route("/:id/rating")
  .get(ratingController.getRating);

module.exports = router;