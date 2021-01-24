const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./tmp/");
  },
  filename(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now().toString().toLowerCase());
  }
});

const upload = multer({ storage }).single("file");

const uploadToCloudinary = (file, options) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, options, (error, result) => {
      (result) ? resolve(result) : reject(error);
    });
  });
};

module.exports = { upload, uploadToCloudinary };