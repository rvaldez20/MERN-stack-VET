const registrar = (req, res) => {
  // Obtenemos los datos del formulario
  const { email, password, nombre } = req.body;

  res.json({ msg: "Registrando Usuario", email, password, nombre });
};

const perfil = (req, res) => {
  res.json({ msg: "Mostrando Perfil" });
};

export { registrar, perfil };
