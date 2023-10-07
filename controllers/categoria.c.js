const {categoriaBD} = require("../models/modelos")

class CategoriaController {
    Mostrar() {
        return categoriaBD;
    }
    ingresar(categoria){
        categoriaBD.push(categoria);
        console.log("Se ha creado una categoria");
        return (categoriaBD);
    }
    Editar(categoria){
        app.put('/categorias/:id', (req, res) => {
            const categoriaId = parseInt(req.params.id);
            const nuevaNombre = req.body.nombre;
          
            // Buscar la categoría por ID
            const categoria = categorias.find(c => c.id === categoriaId);
          
            if (!categoria) {
              return res.status(404).json({ error: 'Categoría no encontrada' });
            }
          
            // Actualizar el nombre de la categoría
            categoria.nombre = nuevaNombre;
          
            res.json(categoria);
          });
    }
    Editar(categoria){
        var id = + categoria
        var search = equipos.findIndex(u => u.id == id)
        if (search == "-1" ){
          console.log("El equipo con id " + id + " no existe");
        }else if(equipos[search].id == id){ 
          console.log("El equipo con id "+ id + "sera actualizado");
          console.log(equipos[search]);
          equipos[search]= newEquipo;
          console.log("El equipo ha sido actualizado");
          console.log(equipos[search]);
        }
      }
}

module.exports = new CategoriaController();