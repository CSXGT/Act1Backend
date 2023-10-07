var express = require('express');
var router = express.Router();
var EquiposController = require("../controllers/equipos.c");


// Ruta para listar equipos
router.get('/', function(req, res, next) {
  res.send(EquiposController.todos());
});

router.get('/equipos/:id', function(req, res, next) {
  const equipoId = req.params.id;
  const equipo = equipos.find(e => e.id === equipoId);
  if (equipo) {
    res.json(equipo);
  } else {
    res.status(404).json({ error: 'Equipo no encontrado' });
  }
});

module.exports = router;