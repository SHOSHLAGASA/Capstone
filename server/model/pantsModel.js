const mongoose = require("mongoose");

//Schema is the structure of the document model
const PantsSchema = new mongoose.Schema({
  price: Number,
  size: Number,
  color: String
});
// creates a Sweater with the model created
const Pants = mongoose.model("Pants", PantsSchema);

module.exports = Pants;
