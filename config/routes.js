const express = require("express");
const routes = express.Router();

const ClienteController = require("../app/controllers/cliente-controller");
const ItemController = require("../app/controllers/item-controller");
const OSController = require("../app/controllers/os-controller");
const UsuarioController = require("../app/controllers/usuario-controller");
const LoginController = require("../app/controllers/login-controller");

routes.get("/clientes", ClienteController.findAll);
routes.get("/clientes/:id", ClienteController.findById);
routes.post("/clientes", ClienteController.store);
routes.put("/clientes/:id", ClienteController.update);
routes.delete("/clientes/:id", ClienteController.delete);

routes.get("/items", ItemController.findAll);
routes.get("/items/:id", ItemController.findById);
routes.post("/items", ItemController.store);
routes.put("/items/:id", ItemController.update);
routes.delete("/items/:id", ItemController.delete);

routes.get("/os", OSController.findAll);
routes.get("/os/:id", OSController.findById);
routes.post("/os", OSController.store);
routes.put("/os/:id", OSController.update);
routes.delete("/os/:id", OSController.delete);

routes.post("/login", LoginController.fazerLogin);
routes.post("/usuario", UsuarioController.store);

module.exports = routes;
