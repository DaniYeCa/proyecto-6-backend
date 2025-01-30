const Plataforma = require("../models/plataformas");



const getPlataformas = async (req, res, next) => {
  try {
    const plataforma = await Plataforma.find().populate("peliculas");
    return res.status(200).json(plataforma)
  } catch (error) {
    return res.status(400).json("error en la solicitud");
  }
};
const getPlataformasById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plataforma = await Plataforma.findById(id).populate("peliculas")
    return res.status(200).json(plataforma)
  } catch (error) {
    return res.status(400).json("error en la solicitud");
  }
};

const postPlataforma = async (req, res, next) => {
  try {
    const newPlataforma = new Plataforma(req.body);
    const plataformaSaved = await newPlataforma.save();
    return res.status(201).json(plataformaSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const putPlataforma = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldPlataforma = await Plataforma.findById(id);
    const newPlataforma = new Plataforma(req.body);
    newPlataforma.peliculas = [...oldPlataforma.peliculas, ...req.body.peliculas]
    newPlataforma._id = id;
    const plataformaUpdated = await Plataforma.findByIdAndUpdate(id, newPlataforma, { new: true })
    return res.status(200).json(plataformaUpdated)
  } catch (error) {
    return res.status(400).json("error en la solicitud");
  }
};
const deletePlataforma = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plataformaDeleted = await Plataforma.findByIdAndDelete(id);
    return res.status(201).json(plataformaDeleted);
  } catch (error) {
    return res.status(400).json("error en la solicitud");
  }
};

module.exports = {
  getPlataformas,
  getPlataformasById,
  postPlataforma,
  putPlataforma,
  deletePlataforma
};

