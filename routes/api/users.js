const router = require("express").Router();
const userController = require("../../controllers/userController");
const User = require("../../models/user");
const { unlinkSync } = require("fs");
const { upload, uploadToCloudinary } = require("../../controllers/uploadcontroller");

// Matches with "/api/users/signup"
router.route("/signup")
  .post(userController.signUp);

// Matches with "/api/users/login"
router
  .route("/login")
  .post(userController.logIn);

// Matches with "/api/users/upload"
router.post("/upload", upload, async({ file, emailID }, res) => {
  try{
    const result = await uploadToCloudinary(file.path, { folder: "foo" });
    if(file) unlinkSync(file.path);
    await User.findOneAndUpdate({
      where:{email: emailID},
      image:result.url
    });
    res.send(result.url);
  }catch(error){
    console.log(error);
  }
});
module.exports = router;
