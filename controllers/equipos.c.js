const {equiposBD} = require ("../models/models");

class EquiposController {

//Para mostrar todos los equipos participantes
    Mostrar(){
            return equiposBD;
    }

//Para ingresar un equipo
    Ingresar(equipo){
        equiposBD.push(equipo);
        return (equiposBD);
    }

//Para Buscar Equipos según su id    
    Buscar(equipo){
        var id = + equipo;
        var search = equiposBD.findIndex(u => u.id == id)
        var res = "El id " + id + " corresponde al equipo " + equiposBD[search].nombre;
        return(res);
      }

//Para Buscar los Integrantes de un equipo según su nombre    
    Buscarint(equipo){
        var nombre = + equipo;
        var search = equiposBD.findIndex(u => u.nombre == nombre)
        var res = "Los integrantes del equipo " + nombre + " son: " + equiposBD[search].integrantes;
        return(res);
  }

//Para Modificar los datos de algún equipo  
Actualizar(equipo , newEquipo){
        var id = + equipo;
        var search = equiposBD.findIndex(u => u.id == id)
        if (search == "-1" ){
          console.log("El equipo con id " + id + " no existe");
        }else if(equiposBD[search].id == id){ 
          console.log("El equipo con id "+ id + "sera actualizado");
          console.log(equiposBD[search]);
          equiposBD[search]= newEquipo;
          console.log("El equipo ha sido actualizado");
          console.log(equiposBD[search]);
        }
      }
      
//Para Eliminar un Equipo
      Eliminar(equipo){
        var id = + equipo;
        var search = equiposBD.findIndex(u => u.id == id)
        if (search == "-1" ){
          console.log("El equipo con id " + id + " no existe");
        }else if(equiposBD[search].id == id){
          console.log("El equipo con id "+ id + " ha sido eliminado ");
          equiposBD.splice(search,1);
        }
      }
    } 


module.exports = new EquiposController();