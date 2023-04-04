const cloudinary = require("cloudinary").v2;

//Get from Cloudinary Dashboard
cloudinary.config({
  cloud_name: "dscsxprie",
  api_key: "522578769293368",
  api_secret: "UbjNpkf_0rgcCHBsCirqQL4JNgc",
  secure: true,
});

module.exports = cloudinary;
