const router = require("express").Router();
const ratingController = require("../../controllers/ratingController");

router.route("/")
  .get(ratingController.getROW)
  .post(ratingController.addRating);

router.route("/:id")
  .get(ratingController.getRating)
  .put(ratingController.updateRating);

module.exports = router;