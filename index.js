require("dotenv").config();
const express = require("express");

const { conectDB } = require("./src/config/db");
const peliculasRouter = require("./src/api/routes/peliculas");
const plataformasRouter = require("./src/api/routes/plataformas");
const cors = require("cors")

const app = express();



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
