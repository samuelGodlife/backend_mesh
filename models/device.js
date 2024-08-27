const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  deviceType: {
    type: String,
    required: true,
  },
  DeviceName: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("device", PlantSchema);
