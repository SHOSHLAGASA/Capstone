const express = require("express");
const SweaterController = require("../controllers/sweaterController");
const router = express.Router();

router
  .route("/")
  .get(SweaterController.getAllSweaters)
  .post(SweaterController.createSweater);

module.exports = router;
