const router = require("express").Router();
const ratingController = require("../../controllers/ratingController");

// Matches with "/api/ratings"
router.route("/")
  .get(ratingController.getROW);

module.exports = router;