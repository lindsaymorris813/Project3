const { unlinkSync } = require("fs");
const router = require("express").Router();
const { upload, uploadToCloudinary } = require("../controllers/uploadcontroller");
const User = require("../models/user");

router.post("/api/user/upload/",upload, async({ file, emailID }, res) => {
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