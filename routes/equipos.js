var express = require('express');
var router = express.Router();
var EquiposController = require("../controllers/equipos.c");

/* GET equipos listing. */
router.get('/', function(req, res, next) {
  res.send(EquiposController.todos());
});

module.exports = router;