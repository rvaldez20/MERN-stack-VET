import express from "express";
import {
  agregarPaciente,
  obtenerPacientes,
} from "../controllers/paciente.controller.js";
import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(checkAuth, agregarPaciente).get(obtenerPacientes);

export default router;
