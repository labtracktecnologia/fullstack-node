require("dotenv").config();

var http = require("http");
var database = require("./config/database");
const app = require("./config/express");

database(process.env.MONGODB_URI);

const port = process.env.PORT || 3000;

http.createServer(app).listen(port, function() {
  console.log("Servidor iniciado na porta 3000");
});
