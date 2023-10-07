let modalidadBD = [
    {
        id:"111",
        nombre:"sumo",
    },
    {
        id:"222",
        nombre:"IVOO",
    },
    {
        id:"333",
        nombre:"Luitronic",
    },
    {
        id:"444",
        nombre:"LaPanteraRosa",
    },
    {
        id:"555",
        nombre:"Canguro",
    }
]

class ModalidadController {
    todos() {
        return modalidadBD;
    }
    uno(id){

    }
    ingresar(modalidad){
        
    }
}

module.exports = new ModalidadController();