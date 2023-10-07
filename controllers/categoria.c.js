let categoriaBD = [
    {
        id: 1,
        nombre:"Batalla de Robots"
    },
    {
        id: 2,
        nombre:"Vehículos Autónomos",
    },
    {
        id: 3,
        nombre:"Soluciones Industriales",
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