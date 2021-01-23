const router = require("express").Router();
const ingredientController = require("../../controllers/ingredientController");

router.route("/")
  .get(ingredientController.getIngredients)
  .post(ingredientController.addIngredient);

module.exports = router;