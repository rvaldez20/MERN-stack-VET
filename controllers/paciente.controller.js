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

const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find()
      .where("veterinario")
      .equals(req.veterinario);
    res.json(pacientes);
  } catch (error) {
    console.log(error);
  }
};

const obtenerPaciente = async (req, res) => {
  const { idPaciente } = req.params;

  try {
    const paciente = await Paciente.findById(idPaciente);

    if (paciente.veterinario.toString() !== req.veterinario._id.toString()) {
      return res.json({ msg: "Acción no valida" });
    }

    if (!paciente) {
      const error = new Error("El paciente no esta registrado");
      return res.status(404).json({ msg: error.message });
    }

    res.json(paciente);

    // console.log(paciente);
  } catch (error) {
    console.log(error);
  }
};

const actualizarPaciente = async (req, res) => {};

const eliminarPaciente = async (req, res) => {};

export {
  agregarPaciente,
  obtenerPacientes,
  obtenerPaciente,
  actualizarPaciente,
  eliminarPaciente,
};
