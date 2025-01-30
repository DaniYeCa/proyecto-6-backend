const { getPeliculas, getPeliculasById, getPeliculasByTime, getPeliculasByCategoria, postPelicula, putPelicula, deletePelicula, } = require("../controllers/peliculas");

const peliculasRouter = require("express").Router();

peliculasRouter.get("/tiempo/:tiempo", getPeliculasByTime);
peliculasRouter.get("/categoria/:categoria", getPeliculasByCategoria);
peliculasRouter.get("/:id", getPeliculasById);
peliculasRouter.get("/", getPeliculas);
peliculasRouter.post("/", postPelicula);
peliculasRouter.put("/:id", putPelicula);
peliculasRouter.delete("/:id", deletePelicula);

module.exports = peliculasRouter;