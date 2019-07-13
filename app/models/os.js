const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const osSchema = new Schema(
  {
    dataEntrada: Date,
    dataSaida: Date,
    valorTotal: Number,
    cliente: {
      type: Schema.Types.ObjectId,
      ref: "cliente"
    },
    itens: [
      {
        item: {
          type: Schema.Types.ObjectId,
          ref: "item"
        }
      }
    ]
  },
  { timestamps: true }
);

const os = mongoose.model("os", osSchema);

module.exports = os;
