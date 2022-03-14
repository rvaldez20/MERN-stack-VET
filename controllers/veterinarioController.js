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

const confirmar = (req, res) => {
  console.log(req.params);
  res.json({ msg: "Confirmando cuenta" });
};

export { registrar, perfil, confirmar };
