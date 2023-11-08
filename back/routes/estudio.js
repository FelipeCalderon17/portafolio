// router de perfil
const express = require("express");
const router = express.Router();
const estudioControlador = require("../controllers/estudio");
const auth = require("../controllers/auth");

router.post("/estudio/registrar", estudioControlador.registrar);
router.get("/estudio/listar", estudioControlador.listar);
router.get("/estudio/listarUno/:id", estudioControlador.listarUno);
router.delete("/estudio/borrar/:id", estudioControlador.borrarUno);
router.put("/estudio/editar/:id", estudioControlador.editar);
module.exports = router;
