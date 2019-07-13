const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clienteSchema = new Schema(
  {
    documento: String,
    nome: String,
    telefone: String,
    email: String
  },
  { timestamps: true }
);

const cliente = mongoose.model("clientes", clienteSchema);

module.exports = cliente;
