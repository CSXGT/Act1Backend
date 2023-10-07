var express = require('express');
var router = express.Router();
var ModalidadController = require("../controllers/modalidad.c");
const { modalidadBD } = require('../models/modelos');

/* GET modalidad listing. */
router.get('/', function(req, res, next) {
  res.send(ModalidadController.Mostrar());
});


/* POST modalidad listing. */
router.post('/', function(req, res, next) {
 
  const modalidad = ModalidadController.ingresar(req.body);
  res.send(modalidadBD);

});

module.exports = router;
