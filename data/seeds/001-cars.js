const { truncate } = require("../config");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "1dn3n4432",
          make: "Acura",
          model: "MDX",
          mileage: 65000,
          transmissionType: "Automatic",
          titleStatus: "New",
        },
        {
          VIN: "2sdfsdfgh",
          make: "Kia",
          model: "Optima",
          mileage: 15000,
          transmissionType: "Manual",
          titleStatus: "Clean",
        },
        {
          VIN: "3sasffesa",
          make: "Ford",
          model: "Transit",
          mileage: 30000,
          transmissionType: "Automatic",
          titleStatus: "New",
        },
        {
          VIN: "89fslflevf",
          make: "Porsha",
          model: "kyan",
          mileage: 15000,
          transmissionType: "Manual",
          titleStatus: "clean",
        },
      ]);
    });
};
