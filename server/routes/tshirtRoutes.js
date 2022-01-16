const express = require("express");
// const SweaterController = require("../controllers/sweaterController");
const tshirt = require("../model/tshirtModel");
const router = express.Router();

router.post("/", (request, response) => {
  const newTshirt = new tshirt(request.body);
  newTshirt.save((err, tshirt) => {
    return err ? response.sendStatus(500).json(err) : response.json(tshirt);
  });
});

router.get("/", (request, response) => {
  tshirt.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.get("/:id", (request, response) => {
  tshirt.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.delete("/:id", (request, response) => {
  tshirt.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  tshirt.findByIdAndUpdate(
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
