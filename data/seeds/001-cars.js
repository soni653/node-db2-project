exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: 1,
          make: "Acura",
          model: "MDX",
          mileage: 65000,
          transmissionType: "V6",
          titleStatus: "New",
        },
        {
          VIN: 2,
          make: "Kia",
          model: "Optima",
          mileage: 15000,
          transmissionType: "V4",
          titleStatus: "Clean",
        },
        {
          VIN: 3,
          make: "Ford",
          model: "Transit",
          mileage: 30000,
          transmissionType: "V4",
          titleStatus: "New",
        },
        {
          VIN: 4,
          make: "Porsha",
          model: "kyan",
          mileage: 15000,
          transmissionType: "V4",
          titleStatus: "clean",
        },
      ]);
    });
};
