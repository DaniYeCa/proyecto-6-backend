

const mongoose = require("mongoose");



const peliculaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  imagen: { type: String, required: true, unique: true },
  tiempo: { type: Number, required: true },
  categoria: { type: String, required: true, enum: ["terror", "comedia", "ciencia ficción", "fantasticas", "románticas", "dramas", "documentales", "thrillers"] }
}, {
  timestamps: true,
  collection: 'peliculas'
});


const Pelicula = mongoose.model("peliculas", peliculaSchema, "peliculas");
module.exports = Pelicula;