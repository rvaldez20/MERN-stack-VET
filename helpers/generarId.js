const generarId = () => {
  // retorna un token personalizado unico en base a la fecha y la funcion random
  return Date.now().toString(32) + Math.random().toString(32).substring(2);
};

export default generarId;
1;
