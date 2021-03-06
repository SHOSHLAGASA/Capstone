const express = require("express");
const pants = require("../model/pantsModel");
const router = express.Router();

router.post("/", (request, response) => {
  const newPants = new pants(request.body);
  newPants.save((err, pants) => {
    return err ? response.sendStatus(500).json(err) : response.json(pants);
  });
});

router.get("/", (request, response) => {
  pants.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.get("/:id", (request, response) => {
  pants.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
router.delete("/:id", (request, response) => {
  pants.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  pants.findByIdAndUpdate(
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
