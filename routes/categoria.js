var express = require('express');
var router = express.Router();
var CategoriaController = require("../controllers/categoria.c");
const { categoriaBD } = require('../models/modelos');

/* GET categoria listing. */
router.get('/', function(req, res, next) {
  res.send(CategoriaController.Mostrar());
});


/* POST categoria listing. */
router.post('/', function(req, res, next) {
 
  const categoria = CategoriaController.ingresar(req.body);
  res.send(categoriaBD);

});

//EDITAR categoria
router.put("/:id", function(req, res, next) {
  res.send(CategoriaController.Modificar(req.params.id , req.body));
  
});


module.exports = router;
