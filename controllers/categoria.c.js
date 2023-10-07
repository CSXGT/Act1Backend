let categoriaBD = [
    {
        id:"1",
        nombre:"Batalla de Robots"
    },
    {
        id:"2",
        nombre:"Vehículos autónomos",
    },
    {
        id:"3",
        nombre:"Soluciones industriales",
    },
]

class CategoriaController {
    todos() {
        return categoriaBD;
    }
    uno(id){

    }
    modificar(id){

    }
    eliminar(id){

    }
}

module.exports = new CategoriaController();