const express = require("express");
const cors = require("cors");
const conexion = require("./models/Conexion");

//inicia base de datos
conexion();
//creamos el server node
const app = express();
const puerto = 3900;

//setting cors :: middleware para evitar error de rutas cruzadas

app.use(cors());
//convertir body de las peticiones a json
app.use(express.json());
//recibir body de los formularios
app.use(express.urlencoded({ extended: true }));

const rutasPersona = require("./routes/persona");
const rutasProyecto = require("./routes/proyecto");
const rutasEstudio = require("./routes/estudio");
app.use("/api", rutasPersona);
app.use("/api", rutasProyecto);
app.use("/api", rutasEstudio);
app.listen(puerto, () => {
  console.log("server ejecutandose", puerto);
});
