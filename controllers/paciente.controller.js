import Paciente from "../models/Paciente.js";

const agregarPaciente = async (req, res) => {
  // console.log(req.body);
  const paciente = new Paciente(req.body);

  try {
    // para acceder al id del usuario autenticado
    // console.log(req.veterinario._id);

    // le agregamos el id del veterinario en el registro del paciente
    paciente.veterinario = req.veterinario._id;
    // console.log(paciente);

    const pacienteGuardado = await paciente.save();
    res.json(pacienteGuardado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerPacientes = (req, res) => {};

export { agregarPaciente, obtenerPacientes };
