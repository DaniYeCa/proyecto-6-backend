require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
const { conectDB } = require("./src/config/db");
const peliculasRouter = require("./src/api/routes/peliculas");
const plataformasRouter = require("./src/api/routes/plataformas");
const cors = require("cors")

const app = express();

//! tambien es una forma de hacerlo
// mongoose.connect(process.env.DB_URL)
//   .then(() => console.log("conectado con exito a la bbdd"))
//   .catch(() => console.log("algo ha fallado"))


//!con express.json lo que estamos haciendo es configurar nuestro servidor para que sea capaz de recibir datos en formatos json
app.use(express.json())
app.use(cors())

conectDB()

app.use("/api/v1/plataformas", plataformasRouter)
app.use("/api/v1/peliculas", peliculasRouter)



app.use("*", (req, res, next) => {
  return res.status(404).json("route not found")
})


app.listen(3000, () => {
  console.log("servidor levantado en : http://localhost:3000 😊");
})
