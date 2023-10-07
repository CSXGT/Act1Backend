var express = require('express');
var router = express.Router();
var CategoriaController = require("../controllers/categoria.c");

/* GET categoria listing. */
router.get('/', function(req, res, next) {
  res.send(CategoriaController.todos());
});

module.exports = router;