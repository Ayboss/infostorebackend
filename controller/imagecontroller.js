const multer = require("multer");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
});

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

exports.uploadinfo = upload.array("media");

exports.cloudinary = cloudinary;
