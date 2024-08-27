const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  species: {
    type: String,
    required: true,
  },
  bahan: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Formula", PlantSchema);
