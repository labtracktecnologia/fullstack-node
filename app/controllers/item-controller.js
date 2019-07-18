const item = require("../models/item");

class ItemController {
  async findAll(req, res) {
    const registros = await item.findAll();
    return res.status(200).json(registros);
  }

  async findById(req, res) {
    const registro = await item.findById(req.params.id);
    if (registro) {
      return res.json(registro);
    } else {
      return res.status(404).send("Not found");
    }
  }

  async store(req, res) {
    const registro = await item.create(req.body);
    return res.status(201).json(registro);
  }

  async update(req, res) {
    const registro = await item.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (registro) {
      return res.status(200).json(registro);
    } else {
      return res.status(404).send("Not found");
    }
  }

  async delete(req, res) {
    const registro = await item.findByIdAndDelete(req.params.id);
    if (registro) {
      return res.status(200).send("Deleted");
    } else {
      return res.status(404).send("Not found");
    }
  }
}

module.exports = new ItemController();
