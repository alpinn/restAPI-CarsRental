const multer = require("multer");
const path = require("path");
const dir = path.resolve();
const uploadPath = path.join(dir, "public", "uploads");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, uploadPath);
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

module.exports = multer({ storage });
