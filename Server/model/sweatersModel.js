const mongoose = require("mongoose");

//Schema is the structure of the document model
const sweaterSchema = new mongoose.Schema({
  type: String,
  price: Number,
  size: Number,
  color: String
});
// creates a Sweater with the model created
const Sweater = mongoose.model("Sweater", sweaterSchema);

module.exports = Sweater;
