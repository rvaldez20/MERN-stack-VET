import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("Hola Mundo desde Express");
});

app.listen(4000, () => {
  console.log("Server listen on port 4000");
});
