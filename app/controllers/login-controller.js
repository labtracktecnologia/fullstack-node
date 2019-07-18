const usuario = require("../models/usuario");
const bcrypt = require("bcrypt-nodejs");

class LoginController {
  async fazerLogin(req, res) {
    const login = req.body.params.usuario;
    const password = req.body.params.senha;

    let conta = await usuario.findOne({ usuario: login });

    if (conta) {
      const isValid = bcrypt.compareSync(password, conta.senha);
      if (isValid) {
        return res.json("Login efetuado com sucesso.");
      } else {
        return res.json("Senha incorreta.");
      }
    } else {
      return res.json("Usuário não encontrado.");
    }
  }
}

module.exports = new LoginController();
