var equiposBD = [
    {
        id: "001",
        nombre: "TechTitans",
        integrantes: ["Juan Pérez", "María López", "Carlos Rodríguez",],
        categoria_id: [1, 2],
        modalidad_id: ["sum1", "seg2"]
    },
    {
        id: "002",
        nombre: "MechaWarriors",
        integrantes: ["Ana García", "Luis Martínez", "Laura Sánchez"],
        categoria_id: [1],
        modalidad_id: ["sum1", "inc1"]
    },
    {
        id: "003",
        nombre: "CircuitBots",
        integrantes: ["Manuel González", "Patricia Torres", "Javier Ruiz", "Elena Fernández"],
        categoria_id: [1, 3],
        modalidad_id: ["sum1", "tos3"]
    },
    {
        id: "004",
        nombre: "NanoTechBots",
        integrantes: ["Alejandro Hernández", "Silvia Ramírez", "Pedro Castro"],
        categoria_id: [1],
        modalidad_id: ["sum1"]
    },
    {
        id: "005",
        nombre: "CyberRaptors",
        integrantes: ["Claudia Morales", "David Jiménez", "Andrea Díaz"],
        categoria_id: [1],
        modalidad_id: ["inc1"]
    },
    {
        id: "006",
        nombre: "AquaBots",
        integrantes: ["Raúl Vargas", "Natalia Ruiz", "Marcos Flores"],
        categoria_id: [1],
        modalidad_id: ["inc1"]
    },
    {
        id: "007",
        nombre: "AstroMechs",
        integrantes: ["Ana Bolena", "Isabel Castillas", "Francisco García"],
        categoria_id: [1,2],
        modalidad_id: ["inc1", "rec2"]
    },
    {
        id: "008",
        nombre: "CodeCrafters",
        integrantes: ["Isabel Torres", "Marta Pérez", "Carmen Rodríguez"],
        categoria_id: [2],
        modalidad_id: ["seg2"]
    },
    {
        id: "009",
        nombre: "RoboGeniuses",
        integrantes: ["Sergio López", "Ricardo Saez", "Daniel Herrera"],
        categoria_id: [2],
        modalidad_id: ["seg2"]
    },
    {
        id: "010",
        nombre: "TechSavvyBots",
        integrantes: ["María Martínez", "Juan Carlos Sánchez", "Gabriela Fernández"],
        categoria_id: [2],
        modalidad_id: ["seg2"]
    },
    {
        id: "011",
        nombre: "BioBots",
        integrantes: ["Pablo González", "José Ramírez"],
        categoria_id: [2, 3],
        modalidad_id: ["seg2", "rec2", "tos3"]
    },
    {
        id: "012",
        nombre: "GreenTechBots",
        integrantes: ["Laura Jiménez", "Jorge Torres", "Carolina López", "Luisa González"],
        categoria_id: [2],
        modalidad_id: ["rec2"]
    },
    {
        id: "013",
        nombre: "SpaceExplorers",
        integrantes: ["Ana María Rodríguez", "Andrea Fernández", "Elena García"],
        categoria_id: [2],
        modalidad_id: ["rec2"]
    },
    {
        id: "014",
        nombre: "RobotRevolution",
        integrantes: ["Javier Pérez", "Daniel Sánchez", "Carlos Martínez"],
        categoria_id: [2],
        modalidad_id: ["rec2"]
    },
    {
        id: "015",
        nombre: "FutureBuilders",
        integrantes: ["Alberto Torres", "María Ramírez"],
        categoria_id: [3],
        modalidad_id: ["tos3"]
    },
    {
        id: "016",
        nombre: "SkyScrapers",
        integrantes: ["Pedro Olmos", "Sofia Peralta", "Carlos Sierralta"],
        categoria_id: 3,
        modalidad_id: ["tos3"]
    },
    {
        id: "017",
        nombre: "MarsRovers",
        integrantes: ["Jorge Calderas", "Eduardo Azuaje", "Doris Ayala"],
        categoria_id: [3],
        modalidad_id: ["tos3"]
    },
    {
        id: "018",
        nombre: "TechWizards",
        integrantes: ["Katy Luceda", "Carina Fernadez", "Teodora Villavicenzio"],
        categoria_id: [3],
        modalidad_id: ["tos3"]
    }
],patrocinantesBD = [
    {
        id:"111",
        nombre:"Universidad Valle del Momboy",
    },
    {
        id:"222",
        nombre:"Makroval",
    },
    {
        id:"333",
        nombre:"Kel",
    },
    {
        id:"444",
        nombre:"Ávila",
    },
    {
        id:"555",
        nombre:"Salepoint Software",
    }
], modalidadBD = [
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
    }
], categoriaBD = [
    {
        id:"sum1",
        nombre:"Sumo",
        modalidad_id: 1
    },
    {
        id:"inc1",
        nombre:"Incapacidad",
        modalidad_id: 1
    },
    {
        id:"seg2",
        nombre:"Seguidor de Línea",
        modalidad_id: 2
    },
    {
        id:"rec2",
        nombre:"Recolección de Objetos",
        modalidad_id: 2
    },
    {
        id:"tos3",
        nombre:"Tostador de Maíz",
        modalidad_id: 3
    }
]

module.exports = {equiposBD, patrocinantesBD, modalidadBD, categoriaBD};
