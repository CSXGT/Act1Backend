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
    Modificar(categoria , newCategoria){
        var id = + categoria;
        var search = categoriaBD.findIndex(u => u.id == id)
        if (search == "-1" ){
          console.log("La categoria con id " + id + " no existe");
        }else if(categoriaBD[search].id == id){ 
          console.log("La categoria con id "+ id + "se modificará");
          console.log(categoriaBD[search]);
          categoriaBD[search]= newCategoria;
          console.log("La categoria ha sido modificadA");
          console.log(categoriaBD[search]);
        }
      }
}

module.exports = new CategoriaController();