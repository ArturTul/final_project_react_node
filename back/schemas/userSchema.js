const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  secret: {
    type: String,
  },
  money: {
    type: Number,
  },
  itemsBought: {
    type: Array,
  },
});

module.exports = mongoose.model("user_Schema", userSchema);
