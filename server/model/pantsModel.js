const mongoose = require("mongoose");

//Schema is the structure of the document model
const pantsSchema = new mongoose.Schema({
  type: String,
  price: Number,
  size: Number,
  color: String
});
// creates a pants with the model created
const pants = mongoose.model("pants", pantsSchema);

module.exports = pants;
