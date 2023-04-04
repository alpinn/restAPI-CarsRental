const Car = require("../models/car.js");

module.exports = {
  createCar: function (req, res) {
    try {
      const createdCar = req.body;
      Car.create(createdCar);
      res.status(201).json({
        message: "Success Add Data!",
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllCar: function (req, res) {
    let cars = Car.list();
    res.status(200).json({
      message: "Success Get All Car!",
      data: cars,
    });
  },

  getCarById: function (req, res) {
    const car = req.car;
    res.status(200).json({
      message: "Success Get Car!",
      data: car,
    });
  },

  deleteCar: function (req, res) {
    try {
      const { id } = req.car;
      Car.delete(id);
      res.status(200).json({
        message: "Success Delete Data!",
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  updateCar: function (req, res) {
    try {
      const { id } = req.car;
      const updatedCar = req.body;
      Car.update(id, updatedCar);
      res.status(201).json({
        message: "Success Update Data!",
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};
