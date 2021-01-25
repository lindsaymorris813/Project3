const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");
const ratingController = require("../../controllers/ratingController");
const { unlinkSync } = require("fs");
const { upload, uploadToCloudinary } = require("../../controllers/uploadcontroller");

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
  .get(ratingController.getRating)
  .post(ratingController.addRating);

router.route("/:id/upload", upload, async(req, res) => {
  try {
    const result = await uploadToCloudinary(req.file.path, { folder: "foo" });
    if (req.file) unlinkSync(req.file.path);
    await User.findOneAndUpdate({email: req.user.email}, {image:result.url}, {new:true});
    res.send(result.url);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;