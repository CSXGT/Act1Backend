var express = require('express');
var router = express.Router();
var ModalidadController = require("../controllers/modalidad.c");

/* GET modalidad listing. */
router.get('/', function(req, res, next) {
  res.send(ModalidadController.todos());
});

module.exports = router;