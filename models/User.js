const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  noHp: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
