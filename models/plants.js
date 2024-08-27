const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Plant", PlantSchema);
