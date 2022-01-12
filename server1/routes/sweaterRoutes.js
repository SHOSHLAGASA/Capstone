const express = require("express");
// const SweaterController = require("../controllers/sweaterController");
const Sweater = require("../model/sweatersModel");
const router = express.Router();

// router
//   .route("/")
//   .get(SweaterController.getAllSweaters)
//   .post(SweaterController.createSweater);
router.post("/", (request, response) => {
  const newSweater = new Sweater(request.body);
  newSweater.save((err, Sweater) => {
    return err ? response.sendStatus(500).json(err) : response.json(Sweater);
  });
});

router.get("/", (request, response) => {
  Sweater.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.get("/:id", (request, response) => {
  Sweater.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.delete("/:id", (request, response) => {
  Sweater.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Sweater.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        type: body.type,
        price: body.price,
        size: body.size,
        color: body.color
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});

module.exports = router;
