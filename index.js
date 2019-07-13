require("dotenv").config();

var http = require("http");
var database = require("./config/database");
const app = require("./config/express");

database(process.env.MONGODB_URI);

http.createServer(app).listen(3000, function() {
  console.log("Servidor iniciado na porta 3000");
});
