const router = require("express").Router();
const apiRoutes = require("./api");

// router.get("*",(_,res)=>{
//   res.sendFile(path.join(__dirname,"../client/build/index.html"));
// });

// API Routes
router.use("/api", apiRoutes);

module.exports = router;