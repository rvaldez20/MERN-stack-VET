import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";

const app = express();

// Configuración de variables de entorno
dotenv.config();

// Conexion a la base de datos
conectarDB();

app.use("/api/veterinarios", veterinarioRoutes);

// para definir el PORT
const PORT = process.env.PORT || 4000;

// Listener del servidor de express
app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
