import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) => {
  // Obtenemos los datos del formulario
  // const { email, password, nombre } = req.body;

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

export { registrar, perfil };
