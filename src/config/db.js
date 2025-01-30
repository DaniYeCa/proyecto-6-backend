const mongoose = require("mongoose")

const conectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("conectado a la base de datos");

  } catch (error) {
    console.log("algo salido mal");

  }
}

module.exports = { conectDB }