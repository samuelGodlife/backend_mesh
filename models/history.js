const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  // email: {
  //   type: String,
  // },
  // DeviceName: {
  //   type: String,
  // },
  Kondisi: {
    type: String,
  },
  dateAdded: {
    type: String,
  },
});

module.exports = mongoose.model("history", PlantSchema);
