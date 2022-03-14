import Veterinario from "../models/Veterinario.js";

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

const autenticar = (req, res) => {
  console.log(req.body);

  // para autenticar: verificar que el usuario exista, que este confirmada, que el passwor sea correcto

  res.json({ msg: "Autenticando" });
};

export { registrar, perfil, confirmar, autenticar };
