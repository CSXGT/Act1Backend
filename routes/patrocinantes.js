var express = require('express');
var router = express.Router();
var PatrocinantesController = require("../controllers/patrocinantes.c");
const { patrocinantesBD } = require('../models/modelos');

/* GET patrocinantes listing. */
router.get('/', function(req, res, next) {
  res.send(PatrocinantesController.Mostrar());
});

/* POST patrocinantes */
router.post('/', function(req, res, next) {
 
  const patrocinantes = PatrocinantesController.ingresar(req.body);
  res.send(patrocinantesBD);

});

module.exports = router;
