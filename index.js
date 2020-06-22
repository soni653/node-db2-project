const express = require("express");
const helmet = require("helmet");
const carsRouter = require("./cars/cars_router");

const server = express();
const port = process.env.PORT || 5050;

server.use(helmet());
server.use(express.json());

server.use("/cars", carsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.listen(port, () => {
  console.log(`Server is listing at http://localhost:${port}`);
});
