// router de perfil
const express = require("express");
const router = express.Router();
const personaControlador = require("../controllers/persona");
const auth = require("../controllers/auth");

router.post("/persona/registrar", personaControlador.registrar);
router.post("/persona/ingresar", personaControlador.login);
router.get("/persona/listar", personaControlador.listar);
router.get("/persona/listarUno/:id", personaControlador.listarUno);
router.delete("/persona/borrar/:id", personaControlador.borrarUno);
router.put("/persona/editar/:id", personaControlador.editar);
module.exports = router;
