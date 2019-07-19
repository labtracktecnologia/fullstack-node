const usuario = require("../models/usuario");
const bcrypt = require("bcrypt-nodejs");

class LoginController {
  async fazerLogin(req, res) {
    const login = req.body.usuario;
    const password = req.body.senha;

    let conta = await usuario.findOne({ login });

    if (conta) {
      const isValid = bcrypt.compareSync(password, conta.senha);
      if (isValid) {
        console.log("Login efetuado com sucesso.");
        return res.json("Login efetuado com sucesso.");
      } else {
        console.log("Senha incorreta.");
        return res.json("Senha incorreta.");
      }
    } else {
      console.log("Usuário não encontrado.");
      return res.json("Usuário não encontrado.");
    }
  }
}

module.exports = new LoginController();
