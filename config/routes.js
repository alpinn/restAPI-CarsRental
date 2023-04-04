const router = require("express").Router();
const controller = require("../app/controllers/carController.js");
const middleware = require("../app/middleware/");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  });
});

router.post(
  `/api/v1/cars`,
  middleware.uploadImg.single("picture"),
  controller.createCar
);
router.get(`/api/v1/cars`, controller.getAllCar);
router.get(`/api/v1/cars/:id`, middleware.checkCar, controller.getCarById);
router.delete(`/api/v1/cars/:id`, middleware.checkCar, controller.deleteCar);
router.put(`/api/v1/cars/:id`, middleware.checkCar, controller.updateCar);

module.exports = router;
