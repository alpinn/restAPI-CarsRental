// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dscsxprie", // TODO: Ganti dengan cloudname-mu
  api_key: "522578769293368", // TODO: Ganti dengan API Key-mu
  api_secret: "UbjNpkf_0rgcCHBsCirqQL4JNgc", // TODO: Ganti dengan API Secret-mu
  secure: true,
});

module.exports = cloudinary;
