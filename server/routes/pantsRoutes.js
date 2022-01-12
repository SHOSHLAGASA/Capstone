const express = require("express");
// const SweaterController = require("../controllers/sweaterController");
const Pants = require("../model/pantsModel");
const router = express.Router();

// router
//   .route("/")
//   .get(SweaterController.getAllSweaters)
//   .post(SweaterController.createSweater);
router.post("/", (request, response) => {
  const newPants = new Pants(request.body);
  newPants.save((err, Pants) => {
    return err ? response.sendStatus(500).json(err) : response.json(Pants);
  });
});

router.get("/", (request, response) => {
  Pants.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.get("/:id", (request, response) => {
  Pants.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
router.delete("/:id", (request, response) => {
  Pants.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Pants.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
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
