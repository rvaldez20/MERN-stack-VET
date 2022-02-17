import express from "express";
import conectarDB from "./config/db.js";

const app = express();

conectarDB();

app.use("/", (req, res) => {
  res.send("Hola Mundo!!");
});

app.listen(4000, () => {
  console.log("Server listen on port 4000");
});
