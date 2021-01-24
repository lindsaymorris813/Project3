const router = require("express").Router();
const recipeRoutes = require("./recipes");
const ratingRoutes = require("./ratings");
const ingredientRoutes = require("./ingredients");
const usersRoutes = require("./users");

router.use("/recipes", recipeRoutes);
router.use("/ratings", ratingRoutes);
router.use("/ingredients", ingredientRoutes);
router.use("/users", usersRoutes);

module.exports = router;