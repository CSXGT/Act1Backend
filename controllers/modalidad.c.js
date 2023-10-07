const {modalidadBD} = require("../models/modelos")

class ModalidadController {
    Mostrar() {
        return modalidadBD;
    }
    ingresar(modalidad){
        modalidadBD.push(modalidad);
        console.log("Se ha creado una modalidad");
        return (modalidadBD);
    }
}

module.exports = new ModalidadController();