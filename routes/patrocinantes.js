var express = require('express');
var router = express.Router();
var PatrocinantesController = require("../controllers/patrocinantes.c");

/* GET patrocinantes listing. */
router.get('/', function(req, res, next) {
  res.send(PatrocinantesController.todos());
});

module.exports = router;