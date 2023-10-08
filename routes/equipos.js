var express = require('express');
const app = require('../app.js');
const equipos = require('../controllers/equipos.c');
var router = express.Router();
var EquiposController = require("../controllers/equipos.c");
const { equiposBD } = require('../models/modelos.js');

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

//Modificar un Equipo
router.put("/:id", function(req, res, next) {
  res.send(EquiposController.Modificar(req.params.id , req.body));
  
});

//Eliminar un Equipo
router.delete("/:id", function(req, res, next) {
  res.send(EquiposController.Eliminar(req.params.id));
});

module.exports = router;