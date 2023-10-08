var express = require('express');
var router = express.Router();
var ModalidadController = require("../controllers/modalidad.c");
const { modalidadBD } = require('../models/modelos');

//Mostrar Modalidad
router.get('/', function(req, res, next) {
  res.send(ModalidadController.Mostrar());
});

//Ingresar Modalidad
router.post('/', function(req, res, next) {
 
  const modalidad = ModalidadController.ingresar(req.body);
  res.send(modalidadBD);

});

module.exports = router;
