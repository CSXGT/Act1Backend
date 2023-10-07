let modalidadBD = [
    {
        id:"sum1",
        nombre:"Sumo",
        categoria_id: 1
    },
    {
        id:"inc1",
        nombre:"Incapacidad",
        categoria_id: 1
    },
    {
        id:"seg2",
        nombre:"Seguidor de Línea",
        categoria_id: 2
    },
    {
        id:"rec2",
        nombre:"Recolección de Objetos",
        categoria_id: 2
    },
    {
        id:"tos3",
        nombre:"Tostador de Maíz",
        categoria_id: 3
    }
]

class ModalidadController {
    todos() {
        return modalidadBD;
    }
    uno(id){

    }
    ingresar(modalidad){
        modalidadBD.push(modalidad);
    }
}

module.exports = new ModalidadController();