const mongoose = require("mongoose");
const Pelicula = require("../../api/models/peliculas");
const peliculas = require("../seeds/peliculas.data");


const documentoPelicula = peliculas.map(pelicula => new Pelicula(pelicula));

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const todasLasPeliculas = await Pelicula.find();

    if (todasLasPeliculas.length) {
      await Pelicula.collection.drop();
    }

    await Pelicula.insertMany(documentoPelicula);
    console.log('Base de datos poblada correctamente');
  } catch (error) {

    return res.status(400).json(`Ha ocurrido el siguiente error: ${error}`);
  } finally {

    await mongoose.disconnect();
    console.log('Desconectado de la base de datos');
  }
};

seedDB();

module.exports = { seedDB };
