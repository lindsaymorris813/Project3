const path = require("path");
const { unlinkSync } = require("fs");
const router = require("express").Router();
const { upload, uploadToCloudinary } = require("../controllers/upload");
const apiRoutes = require("./api");
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

// router.get("*",(_,res)=>{
//   res.sendFile(path.join(__dirname,"../client/build/index.html"));
// });

// API Routes
router.use("/api", apiRoutes);

module.exports = router;