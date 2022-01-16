const mongoose = require("mongoose");

//Schema is the structure of the document model
const tshirtSchema = new mongoose.Schema({
  type: String,
  price: Number,
  size: Number,
  color: String
});
// creates a Sweater with the model created
const tshirt = mongoose.model("tshirt", tshirtSchema);

module.exports = tshirt;
