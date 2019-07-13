const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cliente = new Schema(
  {
    documento: String,
    nome: String,
    telefone: String,
    email: String
  },
  { timestamps: true }
);

const cliente = mongoose.model("clientes", cliente);

module.exports = cliente;
