import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";

const app = express();

// habilitamos el bodyparser
app.use(express.json());

// Configuración de variables de entorno
dotenv.config();

// Conexion a la base de datos
conectarDB();

// para routes veterinarios
app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

// para definir el PORT
const PORT = process.env.PORT || 4000;

// Listener del servidor de express
app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
