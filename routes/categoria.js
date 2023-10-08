var express = require('express');
var router = express.Router();
var CategoriaController = require("../controllers/categoria.c");
const { categoriaBD } = require('../models/modelos');

//Mostrar Categoria
router.get('/', function(req, res, next) {
  res.send(CategoriaController.Mostrar());
});

//Ingresar Categoria
router.post('/', function(req, res, next) {
 
  const categoria = CategoriaController.ingresar(req.body);
  res.send(categoriaBD);

});

//Editar Categoria
router.put("/:id", function(req, res, next) {
  res.send(CategoriaController.Modificar(req.params.id , req.body));
  
});

//Eliminar Categoría
router.delete("/:id", function(req, res, next) {
  res.send(CategoriaController.Eliminar(req.params.id));
});


module.exports = router;
