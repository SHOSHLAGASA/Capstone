const mongoose = require("mongoose");

//Schema is the structure of the document model
const romperSchema = new mongoose.Schema({
  type: String,
  price: Number,
  size: Number,
  color: String
});
// creates a Sweater with the model created
const Romper = mongoose.model("Romper", romperSchema);

module.exports = Romper;
