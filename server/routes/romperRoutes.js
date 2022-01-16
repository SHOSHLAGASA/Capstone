const express = require("express");
const Romper = require("../model/rompersModel");
const router = express.Router();

router.post("/", (request, response) => {
  const newRomper = new Romper(request.body);
  newRomper.save((err, Sweater) => {
    return err ? response.sendStatus(500).json(err) : response.json(Sweater);
  });
});

router.get("/", (request, response) => {
  Romper.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.get("/:id", (request, response) => {
  Romper.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.delete("/:id", (request, response) => {
  Romper.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Romper.findByIdAndUpdate(
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
