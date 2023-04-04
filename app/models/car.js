// -name
// - rentPerDay
// - size
// - photo;
// - createdAt

const { save } = require("../../db/cars.js");
const carsJson = require("../../db/cars.json");

class Car {
  static listCar = carsJson;

  constructor(params) {
    this.id = this.#generateId();
    this.name = params.name;
    this.type = params.type;
    this.rentPerDay = Number(params.rentPerDay);
    this.size = params.size;
    this.photo = params.photo;
    this.createdAt = new Date();
  }

  #generateId = () => {
    let lastListCarId =
      this.constructor.listCar[this.constructor.listCar.length - 1]?.id || 0;
    return lastListCarId + 1;
  };

  static delete = (id) => {
    this.listCar = this.listCar.filter((i) => i.id !== id);
    save(this.listCar);
  };

  static update = (id, params) => {
    this.listCar = this.listCar.map((car) =>
      car.id === Number(id)
        ? {
            ...car,
            name: params.name || car.name,
            type: params.type || car.type,
            rentPerDay: Number(params.rentPerDay) || car.rentPerDay,
            size: params.size || car.size,
            photo: params.photo || car.photo,
            createdAt: new Date(),
          }
        : car
    );

    save(this.listCar);
  };

  static create = (params) => {
    try {
      let cars = new this(params);
      this.listCar.push(cars);
      save(this.listCar);
    } catch (error) {
      console.log(error.message);
    }
  };

  static find(id) {
    const car = this.listCar.find((i) => i.id === Number(id));
    if (!car) return null;

    return car;
  }

  static list = () => {
    return this.listCar;
  };
}

module.exports = Car;
