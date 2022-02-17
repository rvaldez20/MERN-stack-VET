import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";

const app = express();

// Configuración de variables de entorno
dotenv.config();

// Conexion a la base de datos
conectarDB();

app.use("/", (req, res) => {
  res.send("Hola Mundo!!");
});

// Listener del servidor de express
app.listen(4000, () => {
  console.log("Server listen on port 4000");
});
