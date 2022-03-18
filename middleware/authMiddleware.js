import jwt from "jsonwebtoken";
import Veterinario from "../models/Veterinario.js";

const checkAuth = async (req, res, next) => {
  let token;
  // console.log(req.headers.authorization.split(" "));
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);

      // buscamos al usuario que viene el jwt y se asigna le req para crear una sesion
      req.veterinario = await Veterinario.findById(decoded.id).select(
        "-password -token -confirmado"
      );
      // console.log(veterinario);
      return next();
    } catch (error) {
      // console.log(error)
      const e = new Error("Token no Válido");
      return res.status(403).json({ msg: e.message });
    }
  }

  // validamos si existe un token
  if (!token) {
    const error = new Error("Token no Válido o inexistente");
    res.status(403).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
