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
router.patch("/:id", function(req, res, next) {
  res.send(CategoriaController.Actualizar(req.params.id , req.body));
  
});

//Mostrar
router.get('/equiposPorCategoria', (req, res) => {
  const equiposPorCategoria = {};

  categoriaBD.forEach(categoria => {
      equiposPorCategoria[categoria.nombre] = equiposBD.filter(equipo => equipo.categoria_id.includes(categoria.id));
  });

  res.json(equiposPorCategoria);
});


module.exports = router;