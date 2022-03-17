import Veterinario from "../models/Veterinario.js";
import generarJWT from "../helpers/henerarJWT.js";

const registrar = async (req, res) => {
  // Obtenemos los datos del formulario
  const { email } = req.body;

  // validar si el ususrio esta registrado
  const existeUsuario = await Veterinario.findOne({ email });
  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    // Guardar un nuevo Veterinario
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();

    // retornamos el usuario gardado
    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(error);
  }
};

const perfil = (req, res) => {
  res.json({ msg: "Mostrando Perfil" });
};

const confirmar = async (req, res) => {
  // console.log(req.params);
  const { token } = req.params;

  const usuarioConfirmar = await Veterinario.findOne({ token });
  if (!usuarioConfirmar) {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }

  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    usuarioConfirmar.save();

    res.json({ msg: "Usuario Confirmando Correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  // Validamos que el usuario exista
  const usuario = await Veterinario.findOne({ email });
  if (!usuario) {
    const error = new Error("El Usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  // Validamos que este confirmada,
  if (!usuario.confirmado) {
    const error = new Error("Tu cuenta no ha sido confirmada");
    return res.status(403).json({ msg: error.message });
  }

  // Revisar el password
  if (await usuario.comprobarPassword(password)) {
    // console.log(usuario);

    // autenticar con JWT
    res.json({ token: generarJWT(usuario.id) });
  } else {
    const error = new Error("El Password es Incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};

export { registrar, perfil, confirmar, autenticar };
