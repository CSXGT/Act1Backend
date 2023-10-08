var express = require('express');
var router = express.Router();
var PatrocinantesController = require("../controllers/patrocinantes.c");
const { patrocinantesBD } = require('../models/modelos');

//Mostrar Patrocinantes
router.get('/', function(req, res, next) {
  res.send(PatrocinantesController.Mostrar());
});

//Ingresar Patrocinantes
router.post('/', function(req, res, next) {
 
  const patrocinantes = PatrocinantesController.ingresar(req.body);
  res.send(patrocinantesBD);

});

module.exports = router;
