let equiposBD = [
    {
        id: "001",
        nombre: "TechTitans",
        categoria_id: [1, 2],
        modalidad_id: ["sum1", "seg2"]
    },
    {
        id: "002",
        nombre: "MechaWarriors",
        categoria_id: [1],
        modalidad_id: ["sum1", "inc1"]
    },
    {
        id: "003",
        nombre: "CircuitBots",
        categoria_id: [1, 3],
        modalidad_id: ["sum1", "tos3"]
    },
    {
        id: "004",
        nombre: "NanoTechBots",
        categoria_id: [1],
        modalidad_id: ["sum1"]
    },
    {
        id: "005",
        nombre: "CyberRaptors",
        categoria_id: [1],
        modalidad_id: ["inc1"]
    },
    {
        id: "006",
        nombre: "AquaBots",
        categoria_id: [1],
        modalidad_id: ["inc1"]
    },
    {
        id: "007",
        nombre: "AstroMechs",
        categoria_id: [1,2],
        modalidad_id: ["inc1", "rec2"]
    },
    {
        id: "008",
        nombre: "CodeCrafters",
        categoria_id: [2],
        modalidad_id: ["seg2"]
    },
    {
        id: "009",
        nombre: "RoboGeniuses",
        categoria_id: [2],
        modalidad_id: ["seg2"]
    },
    {
        id: "010",
        nombre: "TechSavvyBots",
        categoria_id: [2],
        modalidad_id: ["seg2"]
    },
    {
        id: "011",
        nombre: "BioBots",
        categoria_id: [2, 3],
        modalidad_id: ["seg2", "rec2", "tos3"]
    },
    {
        id: "012",
        nombre: "GreenTechBots",
        categoria_id: [2],
        modalidad_id: ["rec2"]
    },
    {
        id: "013",
        nombre: "SpaceExplorers",
        categoria_id: [2],
        modalidad_id: ["rec2"]
    },
    {
        id: "014",
        nombre: "RobotRevolution",
        categoria_id: [2],
        modalidad_id: ["rec2"]
    },
    {
        id: "015",
        nombre: "FutureBuilders",
        categoria_id: [3],
        modalidad_id: ["tos3"]
    },
    {
        id: "016",
        nombre: "SkyScrapers",
        categoria_id: 3,
        modalidad_id: ["tos3"]
    },
    {
        id: "017",
        nombre: "MarsRovers",
        categoria_id: [3],
        modalidad_id: ["tos3"]
    },
    {
        id: "018",
        nombre: "TechWizards",
        categoria_id: [3],
        modalidad_id: ["tos3"]
    }
]

class EquiposController {
    todos() {
        return equiposBD;
    }
    uno(id){

    }
    ingresar(equipos){
        
    }
}

module.exports = new EquiposController();
