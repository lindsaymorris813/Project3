const router = require("express").Router();
const recipeRoutes = require("./recipes");
const ratingRoutes = require("./ratings");
const ingredientRoutes = require("./ingredients");

router.use("/recipes", recipeRoutes);
router.use("/ratings", ratingRoutes);
router.use("/ingredients", ingredientRoutes);

module.exports = router;