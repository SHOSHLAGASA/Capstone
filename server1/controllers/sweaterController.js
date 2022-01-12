const Sweater = require("../model/sweatersModel");

//asynchronous function to get all Sweaters
exports.getAllSweaters = async (request, response) => {
  try {
    const Sweaters = await Sweater.find();
    response.status(200).json({
      status: "Success",
      results: Sweaters.length,
      data: {
        Sweaters
      }
    });
  } catch (err) {
    response.status(404).json({
      status: "fail",
      message: err
    });
  }
};

//asynchronous function to create a Sweater
exports.createSweater = async (request, response) => {
  try {
    const NewSweater = await Sweater.create(request.body);
    console.log(request.body);
    response.status(201).json({
      status: "success",
      data: { Sweater: NewSweater }
    });
  } catch (err) {
    response.status(404).json({
      status: "fail",
      message: "Invalid data sent"
    });
  }
};
