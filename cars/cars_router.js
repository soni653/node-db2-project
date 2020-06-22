const express = require("express");
const db = require("../data/config.js");

const router = express.Router();

//Get Request

router.get("/", async (req, res, next) => {
  try {
    const car = await db.select("*").from("cars");

    res.json(car);
  } catch (err) {
    next(err);
  }
});

//Get Request By ID

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await db("cars").where({ id }).first();

    res.json(car);
  } catch (err) {
    next(err);
  }
});

//Post or Create Request

router.post("/", async (req, res, next) => {
  try {
    const carData = req.body;
    const [id] = await db("cars").insert(carData);
    const newCar = await db("cars").where({ id });

    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

//Put or Update request

router.put("/:id", async (req, res, next) => {
  try {
    const payload = {
      VIN: req.body.vin,
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage,
      transmissionType: req.body.transmissionType,
      titleStatus: req.body.titleStatus,
    };
    await db("cars").update(payload).where("id", req.params.id);

    const car = await db.from("cars").where("id", req.params.id).first();

    res.json(car);
  } catch (err) {
    next(err);
  }
});

//Delete Request

router.delete("/:id", async (req, res, next) => {
  try {
    await db("cars").where("id", req.params.id).del();

    const car = await db.first("*").from("cars").where("id", req.params.id);
    res.json(car);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
