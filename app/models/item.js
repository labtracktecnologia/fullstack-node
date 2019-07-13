const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    descricao: String,
    valor: Number
  },
  { timestamps: true }
);

const item = mongoose.model("item", itemSchema);

module.exports = item;
