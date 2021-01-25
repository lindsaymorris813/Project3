const router = require("express").Router();
const userController = require("../../controllers/userController");
const User = require("../../models/user");
const { unlinkSync } = require("fs");
const { upload, uploadToCloudinary } = require("../../controllers/uploadcontroller");

//Matches with "/logout" === NEW CODE
router.route("/logout")
  .get(userController.logOut);

// Matches with "/api/users/signup"
router.route("/signup")
  .post(userController.signUp);

// Matches with "/api/users/login"
router
  .route("/login")
  .post(userController.logIn);

// Matches with "/api/users/upload"
router.post("/upload", upload, async(req, res) => {
  console.log(req);
  try{
    const result = await uploadToCloudinary(req.file.path, { folder: "foo" });
    if(req.file) unlinkSync(req.file.path);
    await User.findOne({
      where:{email: req.user.email},
      image:result.url,
    });
    res.send(result.url);
  }catch(error){
    console.log(error);
  }
});
module.exports = router;
