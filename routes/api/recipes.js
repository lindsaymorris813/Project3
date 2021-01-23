const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router.route("/")
  .get(recipeController.searchRecipe)
  .post(recipeController.addRecipe);

router.route("/:id")
  .get(recipeController.findRecipe)
  .put(recipeController.updateRecipe)
  .delete(recipeController.deleteRecipe);

module.exports = router;