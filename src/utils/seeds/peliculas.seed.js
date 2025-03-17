const mongoose = require("mongoose");
const Pelicula = require("../../api/models/peliculas");
const peliculas = require("../seeds/peliculas.data");


// Mapea correctamente las películas para crear instancias del modelo Pelicula
const documentoPelicula = peliculas.map(pelicula => new Pelicula(pelicula));

const seedDB = async () => {
  try {
    // Conexión a la base de datos usando las opciones recomendadas
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true, // Evita advertencias de deprecación
      useUnifiedTopology: true, // Mejora la gestión de conexiones
    });
    // Buscar todas las películas en la base de datos
    const todasLasPeliculas = await Pelicula.find();
    // Si hay películas en la base de datos, eliminarlas antes de insertar nuevas
    if (todasLasPeliculas.length) {
      await Pelicula.collection.drop();
    }
    // Insertar las nuevas películas en la base de datos
    await Pelicula.insertMany(documentoPelicula);
    console.log('Base de datos poblada correctamente');
  } catch (error) {
    // Coger cualquier error y lo muestra en la consola
    return res.status(400).json(`Ha ocurrido el siguiente error: ${error}`);
  } finally {
    // Desconectar de la base de datos para liberar recursos
    await mongoose.disconnect();
    console.log('Desconectado de la base de datos');
  }
};

seedDB();

// Exportamos la función para que pueda ser utilizada
module.exports = { seedDB };
