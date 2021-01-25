const router = require("express").Router();
const ratingController = require("../../controllers/ratingController");

// Matches with "/api/ratings"
router.route("/")
<<<<<<< HEAD
  .get(ratingController.getROW)
=======
  .get(ratingController.getROW);
>>>>>>> 4ee4cdd2d8bfb067a098f549fb7034c9a28368f6

// Matches with "/api/ratings/:id"
router.route("/:id")
  .put(ratingController.updateRating);

module.exports = router;