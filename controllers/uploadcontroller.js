const multer = require("multer");
const cloudinary = require("../config/cloudinary");

//stores file in temp folder
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./tmp/");
  },
  //attaches date/time signature to file name for guaranteed unique filenames
  filename(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now().toString().toLowerCase());
  }
});

//takes in a single file
const upload = multer({ storage }).single("file");

//Promise to wait for Cloudinary upload confirmation
const uploadToCloudinary = (file, options) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, options, (error, result) => {
      (result) ? resolve(result) : reject(error);
    });
  });
};

module.exports = { upload, uploadToCloudinary };