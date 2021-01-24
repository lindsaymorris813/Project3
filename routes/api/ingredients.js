const router = require("express").Router();
const ingredientController = require("../../controllers/ingredientController");

// Matches with "/api/ingredients"
router.route("/")
  .get(ingredientController.getIngredients)
  .post(ingredientController.addIngredient);

module.exports = router;