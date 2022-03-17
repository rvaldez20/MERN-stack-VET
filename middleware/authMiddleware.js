const checkAuth = (req, res, next) => {
  // console.log(req.headers.authorization.split(" "));
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("Si tiene el token con Bearer");
  }

  const error = new Error("Token no Válido o inexistente");
  res.status(403).json({ msg: error.message });

  next();
};

export default checkAuth;
