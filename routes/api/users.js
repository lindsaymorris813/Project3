const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/signup"
router.route("/signup")
  .post(userController.signUp);

// Matches with "/api/users/login"
router
  .route("/login")
  .post(userController.logIn);


module.exports = router;
