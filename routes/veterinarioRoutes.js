import express from "express";
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();

// rutas publicas
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
// rutas para recuperar password
router.post("/olvide-password", olvidePassword);
// router.get("/olvide-password/:token", comprobarToken);
// router.post("/olvide-password/:token", nuevoPassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// rutas privadas
router.get("/perfil", checkAuth, perfil);

export default router;
