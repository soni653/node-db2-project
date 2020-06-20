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

// router.put("/cars/:id", (req,res,next) => {
//   try{
//     const payload = {
//       name:req.body.name,

//     }
//   }
// })

module.exports = router;
