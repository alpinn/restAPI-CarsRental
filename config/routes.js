const router = require("express").Router();
const controller = require("../app/controllers/carController.js");
const middleware = require("../app/middleware/");

//Initial Routes
router.get("/", (req, res) => {
  res.status(200).json({
    message: {
      from_us: "Hello from Kelompok 2 :D",
      kelompok: 2,
      anggota: [
        "Alfinasyah Rifqi",
        "Arief Rachman Hakim",
        "Beni Tiyas Kristanti",
        "Regita Asri Prihantari",
        "Rinaldo Dwi Faturahman",
        "Shidqi Ahmad Farid",
      ],
    },
  });
});

router.post(
  `/api/v1/cars`,
  middleware.upMemoryImg.single("picture"),
  middleware.cloudinaryUpload,
  controller.createCar
);
router.get(`/api/v1/cars`, controller.getAllCar);
router.get(`/api/v1/cars/:id`, middleware.checkCar, controller.getCarById);
router.delete(
  `/api/v1/cars/:id`,
  middleware.checkCar,
  middleware.cloudinaryDelete,
  controller.deleteCar
);
router.put(
  `/api/v1/cars/:id`,
  middleware.checkCar,
  middleware.upMemoryImg.single("picture"),
  middleware.cloudinaryUpload,
  controller.updateCar
);

module.exports = router;
