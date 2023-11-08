// router de perfil
const express = require("express");
const router = express.Router();
const proyectoControlador = require("../controllers/proyecto");
const auth = require("../controllers/auth");

router.post("/proyecto/registrar", proyectoControlador.registrar);
router.get("/proyecto/listar", proyectoControlador.listar);
router.get("/proyecto/listarUno/:id", proyectoControlador.listarUno);
router.delete("/proyecto/borrar/:id", proyectoControlador.borrarUno);
router.put("/proyecto/editar/:id", proyectoControlador.editar);
module.exports = router;
