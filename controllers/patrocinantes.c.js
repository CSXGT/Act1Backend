const {patrocinantesBD} = require("../models/modelos")

class PatrocinantesController {
    Mostrar() {
        return patrocinantesBD;
    }

    ingresar(patrocinantes){
        patrocinantesBD.push(patrocinantes);
        console.log("Se ha creado un patrocinante");
        return (patrocinantesBD);
    }
}
module.exports = new PatrocinantesController();