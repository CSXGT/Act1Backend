var express = require('express');
const app = require('../app.js');
const equipos = require('../controllers/equipos.c');
var router = express.Router();
var EquiposController = require("../controllers/equipos.c");
const { equiposBD } = require('../models/models.js');

//Mostrar Equipos
router.get('/', function(req, res, next) {
  res.send(EquiposController.Mostrar());
});

//Ingresar un Equipo
router.post('/', function(req, res, next) {
  const equipo = EquiposController.Ingresar(req.body);
  res.send(equiposBD);
});

//Buscar un Equipo según id
router.get("/:id", function(req, res, next) {
  res.send(EquiposController.Buscar(req.params.id));
});

//Buscar Integrantes de un Equipo
router.get("/:nombre", function(req, res, next) {
  res.send(EquiposController.Buscarint(req.params.nombre));
});

//Modificar un Equipo
router.patch("/:id", function(req, res, next) {
  res.send(EquiposController.Actualizar(req.params.id , req.body));
  
});

//Eliminar un Equipo
router.delete("/:id", function(req, res, next) {
  res.send(EquiposController.Eliminar(req.params.id));
});

module.exports = router;