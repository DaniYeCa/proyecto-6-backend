const Pelicula = require("../models/peliculas");



const getPeliculas = async (req, res, next) => {
  try {
    const peliculas = await Pelicula.find();
    return res.status(200).json(peliculas)
  } catch (error) {
    return res.status(400).json("error en la solicitud");
  }
};
const getPeliculasById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pelicula = await Pelicula.findById(id)
    return res.status(200).json(pelicula)
  } catch (error) {
    return res.status(400).json("error en la solicitud");
  }
};
const getPeliculasByCategoria = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const peliculas = await Pelicula.find({ categoria })
    return res.status(200).json(peliculas)
  } catch (error) {
    return res.status(400).json("error en la solicitud");
  }
};
const getPeliculasByTime = async (req, res, next) => {
  try {
    const { tiempo } = req.params;
    const peliculas = await Pelicula.find({ tiempo: { $lte: tiempo } })
    return res.status(200).json(peliculas)
  } catch (error) {
    return res.status(400).json("error en la solicitud");
  }
};
const postPelicula = async (req, res, next) => {
  try {
    const newPelicula = new Pelicula(req.body);
    const peliculaSaved = await newPelicula.save();
    return res.status(201).json(peliculaSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const putPelicula = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newPelicula = new Pelicula(req.body);
    newPelicula._id = id;
    const peliculaUpdated = await Pelicula.findByIdAndUpdate(id, newPelicula, { new: true })
    return res.status(200).json(peliculaUpdated)
  } catch (error) {
    return res.status(400).json("error en la solicitud");
  }
};
const deletePelicula = async (req, res, next) => {
  try {
    const { id } = req.params;
    const peliculaDeleted = await Pelicula.findByIdAndDelete(id);
    return res.status(201).json(peliculaDeleted);
  } catch (error) {
    return res.status(400).json("error en la solicitud");
  }
};

module.exports = {
  getPeliculas,
  getPeliculasById,
  getPeliculasByCategoria,
  getPeliculasByTime,
  postPelicula,
  putPelicula,
  deletePelicula
};

