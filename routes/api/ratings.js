const router = require("express").Router();
const ratingController = require("../../controllers/ratingController");

// Matches with "/api/ratings"
router.route("/")
  .get(ratingController.getROW)
  .post(ratingController.addRating);

// Matches with "/api/ratings/:id"
router.route("/:id")
  .put(ratingController.updateRating);

module.exports = router;