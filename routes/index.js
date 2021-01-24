const path = require("path");
const { unlinkSync } = require("fs");
const router = require("express").Router();
const { upload, uploadToCloudinary } = require("../controllers/upload");


router.post("/api/user/upload/",upload, async( {file}, res) => {
  try{
    const result = await uploadToCloudinary(file.path, { folder: "foo" });
    if(file) unlinkSync(file.path);
    res.json(result);
  }catch(error){
    console.log(error);
  }
});


router.get("*",(_,res)=>{
  res.sendFile(path.join(__dirname,"../client/build/index.html"));
});
// const apiRoutes = require("./api");
// API Routes
// router.use("/api", apiRoutes);
// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
module.exports = router;