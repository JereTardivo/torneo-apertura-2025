function nombreAArchivo(nombre) {
    return "escudos/" + nombre
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll(".", "") // eliminar puntos
        .replaceAll(" ", "_")
        .toUpperCase()
        + ".png";
}



const fechasFijas = {
    "FECHA 1": [
        {
            "local": "DEP. INDEPENDIENTE",
            "goles_local": 1,
            "visitante": "SP. BELGRANO",
            "goles_visitante": 0
        },
        {
            "local": "ATL. ASCASUBI",
            "goles_local": 2,
            "visitante": "ESTUDIANTES (HERNANDO)",
            "goles_visitante": 2
        },
        {
            "local": "BELGRANO (BERROTARAN)",
            "goles_local": 2,
            "visitante": "9 DE JULIO (RIO TERCERO)",
            "goles_visitante": 1
        },
        {
            "local": "REC. ELENENSE",
            "goles_local": 0,
            "visitante": "VILLA GENERAL BELGRANO",
            "goles_visitante": 3
        },
        {
            "local": "NAUTICO RUMIPAL",
            "goles_local": 1,
            "visitante": "DEPORTIVO ITALIANO",
            "goles_visitante": 0
        },
        {
            "local": "TALLERES (BERROTARAN)",
            "goles_local": 0,
            "visitante": "ATL. RIO TERCERO",
            "goles_visitante": 0
        },
        {
            "local": "JUVENTUD AGRARIO",
            "goles_local": 2,
            "visitante": "ATL. INDEPENDIENTE",
            "goles_visitante": 2
        },
        {
            "local": "VECINOS UNIDOS",
            "goles_local": 2,
            "visitante": "ATL. ALMAFUERTE",
            "goles_visitante": 3
        }
    ],
    "FECHA 2": [
        {
            "local": "VECINOS UNIDOS",
            "goles_local": 1,
            "visitante": "SP. BELGRANO",
            "goles_visitante": 1
        },
        {
            "local": "ATL. ALMAFUERTE",
            "goles_local": 1,
            "visitante": "JUVENTUD AGRARIO",
            "goles_visitante": 1
        },
        {
            "local": "ATL. INDEPENDIENTE",
            "goles_local": 1,
            "visitante": "TALLERES (BERROTARAN)",
            "goles_visitante": 0
        },
        {
            "local": "ATL. RIO TERCERO",
            "goles_local": 2,
            "visitante": "NAUTICO RUMIPAL",
            "goles_visitante": 2
        },
        {
            "local": "DEPORTIVO ITALIANO",
            "goles_local": 0,
            "visitante": "VILLA GENERAL BELGRANO",
            "goles_visitante": 1
        },
        {
            "local": "REC. ELENENSE",
            "goles_local": 2,
            "visitante": "9 DE JULIO (RIO TERCERO)",
            "goles_visitante": 0
        },
        {
            "local": "ESTUDIANTES (HERNANDO)",
            "goles_local": 0,
            "visitante": "BELGRANO (BERROTARAN)",
            "goles_visitante": 2
        },
        {
            "local": "ATL. ASCASUBI",
            "goles_local": 1,
            "visitante": "DEP. INDEPENDIENTE",
            "goles_visitante": 0
        }
    ],
    "FECHA 3": [
        {
            "local": "SP. BELGRANO",
            "goles_local": 3,
            "visitante": "ATL. ASCASUBI",
            "goles_visitante": 1
        },
        {
            "local": "DEP. INDEPENDIENTE",
            "goles_local": 2,
            "visitante": "BELGRANO (BERROTARAN)",
            "goles_visitante": 2
        },
        {
            "local": "ESTUDIANTES (HERNANDO)",
            "goles_local": 0,
            "visitante": "REC. ELENENSE",
            "goles_visitante": 1
        },
        {
            "local": "9 DE JULIO (RIO TERCERO)",
            "goles_local": 3,
            "visitante": "DEPORTIVO ITALIANO",
            "goles_visitante": 1
        },
        {
            "local": "VILLA GENERAL BELGRANO",
            "goles_local": 1,
            "visitante": "ATL. RIO TERCERO",
            "goles_visitante": 2
        },
        {
            "local": "NAUTICO RUMIPAL",
            "goles_local": 2,
            "visitante": "ATL. INDEPENDIENTE",
            "goles_visitante": 0
        },
        {
            "local": "TALLERES (BERROTARAN)",
            "goles_local": 4,
            "visitante": "ATL. ALMAFUERTE",
            "goles_visitante": 3
        },
        {
            "local": "JUVENTUD AGRARIO",
            "goles_local": 2,
            "visitante": "VECINOS UNIDOS",
            "goles_visitante": 2
        }
    ],
    "FECHA 4": [
        {
            "local": "JUVENTUD AGRARIO",
            "goles_local": 2,
            "visitante": "SP. BELGRANO",
            "goles_visitante": 1
        },
        {
            "local": "VECINOS UNIDOS",
            "goles_local": 0,
            "visitante": "TALLERES (BERROTARAN)",
            "goles_visitante": 0
        },
        {
            "local": "ATL. ALMAFUERTE",
            "goles_local": 0,
            "visitante": "NAUTICO RUMIPAL",
            "goles_visitante": 1
        },
        {
            "local": "ATL. INDEPENDIENTE",
            "goles_local": 1,
            "visitante": "VILLA GENERAL BELGRANO",
            "goles_visitante": 1
        },
        {
            "local": "9 DE JULIO (RIO TERCERO)",
            "goles_local": 2,
            "visitante": "ATL. RIO TERCERO",
            "goles_visitante": 1
        },
        {
            "local": "DEPORTIVO ITALIANO",
            "goles_local": 0,
            "visitante": "ESTUDIANTES (HERNANDO)",
            "goles_visitante": 1
        },
        {
            "local": "REC. ELENENSE",
            "goles_local": 0,
            "visitante": "DEP. INDEPENDIENTE",
            "goles_visitante": 1
        },
        {
            "local": "ATL. ASCASUBI",
            "goles_local": 2,
            "visitante": "BELGRANO (BERROTARAN)",
            "goles_visitante": 3
        }
    ],
    "FECHA 5": [
        {
            "local": "SP. BELGRANO",
            "goles_local": 0,
            "visitante": "BELGRANO (BERROTARAN)",
            "goles_visitante": 3
        },
        {
            "local": "ATL. ASCASUBI",
            "goles_local": 3,
            "visitante": "REC. ELENENSE",
            "goles_visitante": 2
        },
        {
            "local": "DEPORTIVO ITALIANO",
            "goles_local": 1,
            "visitante": "DEP. INDEPENDIENTE",
            "goles_visitante": 1
        },
        {
            "local": "ESTUDIANTES (HERNANDO)",
            "goles_local": 0,
            "visitante": "ATL. RIO TERCERO",
            "goles_visitante": 1
        },
        {
            "local": "9 DE JULIO (RIO TERCERO)",
            "goles_local": 0,
            "visitante": "ATL. INDEPENDIENTE",
            "goles_visitante": 0
        },
        {
            "local": "VILLA GENERAL BELGRANO",
            "goles_local": 0,
            "visitante": "ATL. ALMAFUERTE",
            "goles_visitante": 1
        },
        {
            "local": "NAUTICO RUMIPAL",
            "goles_local": 2,
            "visitante": "VECINOS UNIDOS",
            "goles_visitante": 2
        },
        {
            "local": "TALLERES (BERROTARAN)",
            "goles_local": 1,
            "visitante": "JUVENTUD AGRARIO",
            "goles_visitante": 2
        }
    ],
    "FECHA 6": [
        {
            "local": "TALLERES (BERROTARAN)",
            "goles_local": 1,
            "visitante": "SP. BELGRANO",
            "goles_visitante": 1
        },
        {
            "local": "NAUTICO RUMIPAL",
            "goles_local": 0,
            "visitante": "JUVENTUD AGRARIO",
            "goles_visitante": 2
        },
        {
            "local": "VECINOS UNIDOS",
            "goles_local": 0,
            "visitante": "VILLA GENERAL BELGRANO",
            "goles_visitante": 2
        },
        {
            "local": "ATL. ALMAFUERTE",
            "goles_local": 0,
            "visitante": "9 DE JULIO (RIO TERCERO)",
            "goles_visitante": 6
        },
        {
            "local": "ESTUDIANTES (HERNANDO)",
            "goles_local": 0,
            "visitante": "ATL. INDEPENDIENTE",
            "goles_visitante": 3
        },
        {
            "local": "ATL. RIO TERCERO",
            "goles_local": 3,
            "visitante": "DEP. INDEPENDIENTE",
            "goles_visitante": 0
        },
        {
            "local": "DEPORTIVO ITALIANO",
            "goles_local": 1,
            "visitante": "ATL. ASCASUBI",
            "goles_visitante": 3
        },
        {
            "local": "BELGRANO (BERROTARAN)",
            "goles_local": 1,
            "visitante": "REC. ELENENSE",
            "goles_visitante": 1
        }
    ],
    "FECHA 7": [
        {
            "local": "SP. BELGRANO",
            "goles_local": 1,
            "visitante": "REC. ELENENSE",
            "goles_visitante": 3
        },
        {
            "local": "BELGRANO (BERROTARAN)",
            "goles_local": 3,
            "visitante": "DEPORTIVO ITALIANO",
            "goles_visitante": 2
        },
        {
            "local": "ATL. ASCASUBI",
            "goles_local": 0,
            "visitante": "ATL. RIO TERCERO",
            "goles_visitante": 0
        },
        {
            "local": "DEP. INDEPENDIENTE",
            "goles_local": 3,
            "visitante": "ATL. INDEPENDIENTE",
            "goles_visitante": 2
        },
        {
            "local": "ESTUDIANTES (HERNANDO)",
            "goles_local": 3,
            "visitante": "ATL. ALMAFUERTE",
            "goles_visitante": 1
        },
        {
            "local": "9 DE JULIO (RIO TERCERO)",
            "goles_local": 1,
            "visitante": "VECINOS UNIDOS",
            "goles_visitante": 1
        },
        {
            "local": "VILLA GENERAL BELGRANO",
            "goles_local": 0,
            "visitante": "JUVENTUD AGRARIO",
            "goles_visitante": 1
        },
        {
            "local": "NAUTICO RUMIPAL",
            "goles_local": 2,
            "visitante": "TALLERES (BERROTARAN)",
            "goles_visitante": 2
        }
    ],
    "FECHA 8": [
        {
            "local": "NAUTICO RUMIPAL",
            "goles_local": 4,
            "visitante": "SP. BELGRANO",
            "goles_visitante": 3
        },
        {
            "local": "TALLERES (BERROTARAN)",
            "goles_local": 3,
            "visitante": "VILLA GENERAL BELGRANO",
            "goles_visitante": 2
        },
        {
            "local": "JUVENTUD AGRARIO",
            "goles_local": 0,
            "visitante": "9 DE JULIO (RIO TERCERO)",
            "goles_visitante": 1
        },
        {
            "local": "VECINOS UNIDOS",
            "goles_local": 3,
            "visitante": "ESTUDIANTES (HERNANDO)",
            "goles_visitante": 1
        },
        {
            "local": "ATL. ALMAFUERTE",
            "goles_local": 2,
            "visitante": "DEP. INDEPENDIENTE",
            "goles_visitante": 2
        },
        {
            "local": "ATL. INDEPENDIENTE",
            "goles_local": 1,
            "visitante": "ATL. ASCASUBI",
            "goles_visitante": 1
        },
        {
            "local": "ATL. RIO TERCERO",
            "goles_local": 2,
            "visitante": "BELGRANO (BERROTARAN)",
            "goles_visitante": 1
        },
        {
            "local": "DEPORTIVO ITALIANO",
            "goles_local": 1,
            "visitante": "REC. ELENENSE",
            "goles_visitante": 3
        }
    ],
    "FECHA 9": [
        {
            "local": "SP. BELGRANO",
            "goles_local": 1,
            "visitante": "DEPORTIVO ITALIANO",
            "goles_visitante": 1
        },
        {
            "local": "REC. ELENENSE",
            "goles_local": 1,
            "visitante": "ATL. RIO TERCERO",
            "goles_visitante": 3
        },
        {
            "local": "BELGRANO (BERROTARAN)",
            "goles_local": 2,
            "visitante": "ATL. INDEPENDIENTE",
            "goles_visitante": 0
        },
        {
            "local": "ATL. ASCASUBI",
            "goles_local": 1,
            "visitante": "ATL. ALMAFUERTE",
            "goles_visitante": 3
        },
        {
            "local": "DEP. INDEPENDIENTE",
            "goles_local": 1,
            "visitante": "VECINOS UNIDOS",
            "goles_visitante": 1
        },
        {
            "local": "ESTUDIANTES (HERNANDO)",
            "goles_local": 1,
            "visitante": "JUVENTUD AGRARIO",
            "goles_visitante": 0
        },
        {
            "local": "9 DE JULIO (RIO TERCERO)",
            "goles_local": 0,
            "visitante": "TALLERES (BERROTARAN)",
            "goles_visitante": 1
        },
        {
            "local": "VILLA GENERAL BELGRANO",
            "goles_local": 1,
            "visitante": "NAUTICO RUMIPAL",
            "goles_visitante": 1
        }
    ],
    "FECHA 10": [
        {
            "local": "VILLA GENERAL BELGRANO",
            "goles_local": 0,
            "visitante": "SP. BELGRANO",
            "goles_visitante": 2
        },
        {
            "local": "NAUTICO RUMIPAL",
            "goles_local": 1,
            "visitante": "9 DE JULIO (RIO TERCERO)",
            "goles_visitante": 0
        },
        {
            "local": "TALLERES (BERROTARAN)",
            "goles_local": 3,
            "visitante": "ESTUDIANTES (HERNANDO)",
            "goles_visitante": 0
        },
        {
            "local": "DEP. INDEPENDIENTE",
            "goles_local": 1,
            "visitante": "JUVENTUD AGRARIO",
            "goles_visitante": 2
        },
        {
            "local": "VECINOS UNIDOS",
            "goles_local": 2,
            "visitante": "ATL. ASCASUBI",
            "goles_visitante": 2
        },
        {
            "local": "ATL. ALMAFUERTE",
            "goles_local": 2,
            "visitante": "BELGRANO (BERROTARAN)",
            "goles_visitante": 1
        },
        {
            "local": "ATL. INDEPENDIENTE",
            "goles_local": 2,
            "visitante": "REC. ELENENSE",
            "goles_visitante": 0
        },
        {
            "local": "ATL. RIO TERCERO",
            "goles_local": 2,
            "visitante": "DEPORTIVO ITALIANO",
            "goles_visitante": 0
        }
    ],
    "FECHA 11": [
        {
            "local": "ATL. INDEPENDIENTE",
            "goles_local": 0,
            "visitante": "ESTUDIANTES (HERNANDO)",
            "goles_visitante": 0
        },
        {
            "local": "ATL. RIO TERCERO",
            "goles_local": 1,
            "visitante": "9 DE JULIO (RIO TERCERO)",
            "goles_visitante": 2
        },
        {
            "local": "VILLA GENERAL BELGRANO",
            "goles_local": 1,
            "visitante": "DEPORTIVO ITALIANO",
            "goles_visitante": 1
        },
        {
            "local": "REC. ELENENSE",
            "goles_local": 3,
            "visitante": "NAUTICO RUMIPAL",
            "goles_visitante": 0
        },
        {
            "local": "BELGRANO (BERROTARAN)",
            "goles_local": 0,
            "visitante": "TALLERES (BERROTARAN)",
            "goles_visitante": 3
        },
        {
            "local": "ATL. ASCASUBI",
            "goles_local": 1,
            "visitante": "JUVENTUD AGRARIO",
            "goles_visitante": 1
        },
        {
            "local": "VECINOS UNIDOS",
            "goles_local": 2,
            "visitante": "DEP. INDEPENDIENTE",
            "goles_visitante": 2
        },
        {
            "local": "ATL. ALMAFUERTE",
            "goles_local": 0,
            "visitante": "SP. BELGRANO",
            "goles_visitante": 1
        }
    ],
    "FECHA 12": [
        {
            "local": "SP. BELGRANO",
            "goles_local": 4,
            "visitante": "ATL. RIO TERCERO",
            "goles_visitante": 1
        },
        {
            "local": "DEPORTIVO ITALIANO",
            "goles_local": 1,
            "visitante": "ATL. INDEPENDIENTE",
            "goles_visitante": 0
        },
        {
            "local": "REC. ELENENSE",
            "goles_local": 2,
            "visitante": "ATL. ALMAFUERTE",
            "goles_visitante": 0
        },
        {
            "local": "BELGRANO (BERROTARAN)",
            "goles_local": 2,
            "visitante": "VECINOS UNIDOS",
            "goles_visitante": 2
        },
        {
            "local": "JUVENTUD AGRARIO",
            "goles_local": 4,
            "visitante": "ATL. ASCASUBI",
            "goles_visitante": 1
        },
        {
            "local": "DEP. INDEPENDIENTE",
            "goles_local": 1,
            "visitante": "TALLERES (BERROTARAN)",
            "goles_visitante": 1
        },
        {
            "local": "ESTUDIANTES (HERNANDO)",
            "goles_local": 1,
            "visitante": "NAUTICO RUMIPAL",
            "goles_visitante": 0
        },
        {
            "local": "9 DE JULIO (RIO TERCERO)",
            "goles_local": 1,
            "visitante": "VILLA GENERAL BELGRANO",
            "goles_visitante": 1
        }
    ],
    "FECAH 13": [
        {
            "local": "9 DE JULIO (RIO TERCERO)",
            "goles_local": 1,
            "visitante": "SP. BELGRANO",
            "goles_visitante": 2
        },
        {
            "local": "VILLA GENERAL BELGRANO",
            "goles_local": 2,
            "visitante": "ESTUDIANTES (HERNANDO)",
            "goles_visitante": 0
        },
        {
            "local": "NAUTICO RUMIPAL",
            "goles_local": 1,
            "visitante": "DEP. INDEPENDIENTE",
            "goles_visitante": 2
        },
        {
            "local": "TALLERES (BERROTARAN)",
            "goles_local": 0,
            "visitante": "ATL. ASCASUBI",
            "goles_visitante": 0
        },
        {
            "local": "JUVENTUD AGRARIO",
            "goles_local": 1,
            "visitante": "BELGRANO (BERROTARAN)",
            "goles_visitante": 4
        },
        {
            "local": "VECINOS UNIDOS",
            "goles_local": 1,
            "visitante": "REC. ELENENSE",
            "goles_visitante": 1
        },
        {
            "local": "ATL. ALMAFUERTE",
            "goles_local": 5,
            "visitante": "DEPORTIVO ITALIANO",
            "goles_visitante": 2
        },
        {
            "local": "ATL. INDEPENDIENTE",
            "goles_local": 1,
            "visitante": "ATL. RIO TERCERO",
            "goles_visitante": 2
        }
    ], "FECHA 14": [
        {
            "local": "SP. BELGRANO",
            "goles_local": 1,
            "visitante": "ATL. INDEPENDIENTE",
            "goles_visitante": 2
        },
        {
            "local": "ATL. RIO TERCERO",
            "goles_local": 2,
            "visitante": "ATL. ALMAFUERTE",
            "goles_visitante": 1
        },
        {
            "local": "DEPORTIVO ITALIANO",
            "goles_local": 0,
            "visitante": "VECINOS UNIDOS",
            "goles_visitante": 1
        },
        {
            "local": "REC. ELENENSE",
            "goles_local": 1,
            "visitante": "JUVENTUD AGRARIO",
            "goles_visitante": 1
        },
        {
            "local": "TALLERES (BERROTARAN)",
            "goles_local": 1,
            "visitante": "BELGRANO (BERROTARAN)",
            "goles_visitante": 0
        },
        {
            "local": "ATL. ASCASUBI",
            "goles_local": 0,
            "visitante": "NAUTICO RUMIPAL",
            "goles_visitante": 1
        },
        {
            "local": "DEP. INDEPENDIENTE",
            "goles_local": 2,
            "visitante": "VILLA GENERAL BELGRANO",
            "goles_visitante": 1
        },
        {
            "local": "ESTUDIANTES (HERNANDO)",
            "goles_local": 3,
            "visitante": "9 DE JULIO (RIO TERCERO)",
            "goles_visitante": 2
        }
    ], "FECHA 15": [
        {
            "local": "ESTUDIANTES (HERNANDO)",
            "goles_local": 3,
            "visitante": "SP. BELGRANO",
            "goles_visitante": 0
        },
        {
            "local": "9 DE JULIO (RIO TERCERO)",
            "goles_local": 3,
            "visitante": "DEP. INDEPENDIENTE",
            "goles_visitante": 1
        },
        {
            "local": "VILLA GENERAL BELGRANO",
            "goles_local": 0,
            "visitante": "ATL. ASCASUBI",
            "goles_visitante": 1
        },
        {
            "local": "NAUTICO RUMIPAL",
            "goles_local": 1,
            "visitante": "BELGRANO (BERROTARAN)",
            "goles_visitante": 1
        },
        {
            "local": "TALLERES (BERROTARAN)",
            "goles_local": 2,
            "visitante": "REC. ELENENSE",
            "goles_visitante": 1
        },
        {
            "local": "JUVENTUD AGRARIO",
            "goles_local": 4,
            "visitante": "DEPORTIVO ITALIANO",
            "goles_visitante": 0
        },
        {
            "local": "VECINOS UNIDOS",
            "goles_local": 1,
            "visitante": "ATL. RIO TERCERO",
            "goles_visitante": 0
        },
        {
            "local": "ATL. ALMAFUERTE",
            "goles_local": 1,
            "visitante": "ATL. INDEPENDIENTE",
            "goles_visitante": 1
        }
    ]
};

const fechasEditables = {

    "FECHA 16": [
        {
            "local": "SP. BELGRANO",
            "goles_local": "",
            "visitante": "ATL. ALMAFUERTE",
            "goles_visitante": ""
        },
        {
            "local": "ATL. INDEPENDIENTE",
            "goles_local": "",
            "visitante": "VECINOS UNIDOS",
            "goles_visitante": ""
        },
        {
            "local": "ATL. RIO TERCERO",
            "goles_local": "",
            "visitante": "JUVENTUD AGRARIO",
            "goles_visitante": ""
        },
        {
            "local": "DEPORTIVO ITALIANO",
            "goles_local": "",
            "visitante": "TALLERES (BERROTARAN)",
            "goles_visitante": ""
        },
        {
            "local": "NAUTICO RUMIPAL",
            "goles_local": "",
            "visitante": "REC. ELENENSE",
            "goles_visitante": ""
        },
        {
            "local": "BELGRANO (BERROTARAN)",
            "goles_local": "",
            "visitante": "VILLA GENERAL BELGRANO",
            "goles_visitante": ""
        },
        {
            "local": "ATL. ASCASUBI",
            "goles_local": "",
            "visitante": "9 DE JULIO (RIO TERCERO)",
            "goles_visitante": ""
        },
        {
            "local": "DEP. INDEPENDIENTE",
            "goles_local": "",
            "visitante": "ESTUDIANTES (HERNANDO)",
            "goles_visitante": ""
        }
    ]
};

const equipos = [
    "9 DE JULIO (RIO TERCERO)",
    "ATL. ALMAFUERTE",
    "ATL. ASCASUBI",
    "ATL. INDEPENDIENTE",
    "ATL. RIO TERCERO",
    "BELGRANO (BERROTARAN)",
    "DEP. INDEPENDIENTE",
    "DEPORTIVO ITALIANO",
    "ESTUDIANTES (HERNANDO)",
    "JUVENTUD AGRARIO",
    "NAUTICO RUMIPAL",
    "REC. ELENENSE",
    "SP. BELGRANO",
    "TALLERES (BERROTARAN)",
    "VECINOS UNIDOS",
    "VILLA GENERAL BELGRANO"
];

const tablaPosiciones = {};
const criteriosAplicados = [];
const explicacionesDesempate = [];
let ordenFinalGlobal = [];
let top7Definitivo = [];
let grupoRaiz = [];

equipos.forEach(equipo => {
    tablaPosiciones[equipo] = { PJ: 0, Pts: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0 };
});

function renderFechasFijas() {
    const container = document.getElementById("fechas-fijas");
    for (const fecha in fechasFijas) {
        const card = document.createElement("div");
        card.innerHTML = `<h3 class="text-lg font-bold mb-2">${fecha}</h3>`;
        fechasFijas[fecha].forEach(partido => {
            card.innerHTML += `
                    <div class="match flex justify-between items-center">
                        <span class="text-sm md:text-base truncate">${partido.local.trim()}</span>
                        <span class="font-bold text-lg">${partido.goles_local} - ${partido.goles_visitante}</span>
                        <span class="text-sm md:text-base truncate">${partido.visitante.trim()}</span>
                    </div>`;
        });
        container.appendChild(card);
    }
}

function renderFechasEditables() {
    const container = document.getElementById("fechas-editables");
    for (const fecha in fechasEditables) {
        const card = document.createElement("div");
        card.innerHTML = `<h3 class="text-lg font-bold mb-2">${fecha}</h3>`;
        fechasEditables[fecha].forEach((partido, index) => {
            card.innerHTML += `
                    <div class="match flex justify-between items-center">
                        <span class="text-sm md:text-base truncate">${partido.local.trim()}</span>
                        <input type="text" inputmode="numeric" pattern="[0-9]*" min="0" value="${partido.goles_local === "" ? "" : partido.goles_local}" 
                            onchange="updateResultado('${fecha}', ${index}, 'local', this.value)">
                        <span class="font-bold text-lg">-</span>
                        <input type="text" inputmode="numeric" pattern="[0-9]*" min="0" value="${partido.goles_visitante === "" ? "" : partido.goles_visitante}" 
                            onchange="updateResultado('${fecha}', ${index}, 'visitante', this.value)">
                        <span class="text-sm md:text-base truncate">${partido.visitante.trim()}</span>
                    </div>`;
        });
        container.appendChild(card);
    }
}

function updateResultado(fecha, index, equipo, value) {
    const val = value === "" ? "" : Math.max(0, parseInt(value));

    if (equipo === "local") {
        fechasEditables[fecha][index].goles_local = val;

        if (fechasEditables[fecha][index].goles_visitante === "") {
            fechasEditables[fecha][index].goles_visitante = 0;
            actualizarInputVisible(fecha, index, "visitante", 0);
        }
    } else {
        fechasEditables[fecha][index].goles_visitante = val;

        if (fechasEditables[fecha][index].goles_local === "") {
            fechasEditables[fecha][index].goles_local = 0;
            actualizarInputVisible(fecha, index, "local", 0);
        }
    }

    calcularTabla();
}

function actualizarInputVisible(fecha, index, equipo, valor) {
    document.querySelectorAll(".fecha-card").forEach(card => {
        const titulo = card.querySelector("h3")?.innerText;
        if (titulo === fecha) {
            const filas = card.querySelectorAll("tbody tr");
            const fila = filas[index];
            if (fila) {
                const inputs = fila.querySelectorAll("input");
                if (equipo === "local" && inputs[0]) {
                    inputs[0].value = valor;
                } else if (equipo === "visitante" && inputs[1]) {
                    inputs[1].value = valor;
                }
            }
        }
    });
}


function renderFixture(filtroEquipo = "TODOS") {

    const container = document.getElementById("fixture");
    container.innerHTML = "";



    function renderFecha(fechaNombre, partidos, editable = false) {
        const partidosFiltrados = partidos.filter(p =>
            filtroEquipo === "TODOS" ||
            p.local === filtroEquipo ||
            p.visitante === filtroEquipo
        );
        if (partidosFiltrados.length === 0) return; // No renderizar si no hay partidos

        const card = document.createElement("div");
        card.className = "fecha-card";
        card.innerHTML = `<h3 class="text-lg font-bold mb-2">${fechaNombre}</h3>`;

        let tableHTML = `
    <table class="w-full table-fixed">
        <thead>
            <tr>
                <th class="w-2/5 text-center">LOCAL</th>
                <th class="w-1/5 text-center">
    <span class="block md:hidden">R</span>
    <span class="hidden md:block">RESULTADO</span>
    </th>
                <th class="w-2/5 text-center">VISITANTE</th>
            </tr>
        </thead>
        <tbody>`;


        partidosFiltrados.forEach((partido, index) => {
            let resultadoHTML = "";

            if (editable) {
                resultadoHTML = `
                    <input type="text" inputmode="numeric" pattern="[0-9]*" min="0" value="${partido.goles_local === "" ? "" : partido.goles_local}" 
                        onchange="updateResultado('${fechaNombre}', ${index}, 'local', this.value)"
                        style="width: 40px; text-align: center;"> 
                    - 
                    <input type="text" inputmode="numeric" pattern="[0-9]*" min="0" value="${partido.goles_visitante === "" ? "" : partido.goles_visitante}" 
                        onchange="updateResultado('${fechaNombre}', ${index}, 'visitante', this.value)"
                        style="width: 40px; text-align: center;">`;
            } else {
                resultadoHTML = `<span class="font-bold text-base">${partido.goles_local} - ${partido.goles_visitante}</span>`;
            }

            tableHTML += `
                <tr>
                    <td>
                        <div class="flex items-center justify-end gap-2">
                            <span class="text-sm md:text-base truncate">${partido.local}</span>
                            <img src="${nombreAArchivo(partido.local)}" alt="${partido.local}" class="escudo-equipo">
                        </div>
                    </td>
                    <td>
                        <div class="flex justify-center font-bold text-base">
                        ${resultadoHTML}
                        </div>
                    </td>

                    <td>
                        <div class="flex items-center justify-start gap-2">
                            <img src="${nombreAArchivo(partido.visitante)}" alt="${partido.visitante}" class="escudo-equipo">
                            <span class="text-sm md:text-base truncate">${partido.visitante}</span>
                        </div>
                    </td>
                </tr>`;
        });

        tableHTML += `</tbody></table>`;
        card.innerHTML += tableHTML;
        container.appendChild(card);
    }

    for (const fecha in fechasFijas) {
        renderFecha(fecha, fechasFijas[fecha]);
    }

    for (const fecha in fechasEditables) {
        renderFecha(fecha, fechasEditables[fecha], true);
    }
}

function calcularTabla() {
    for (const equipo in tablaPosiciones) {
        tablaPosiciones[equipo] = { PJ: 0, Pts: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0 };
    }

    for (const fecha in fechasFijas) {
        fechasFijas[fecha].forEach(p => procesarPartido(p));
    }

    for (const fecha in fechasEditables) {
        fechasEditables[fecha].forEach(p => {
            if (p.goles_local !== "" && p.goles_visitante !== "") {
                procesarPartido(p);
            }
        });
    }

    renderTabla();
}

function procesarPartido(p) {
    const local = p.local;
    const visitante = p.visitante;
    const gl = parseInt(p.goles_local);
    const gv = parseInt(p.goles_visitante);

    tablaPosiciones[local].PJ++;
    tablaPosiciones[visitante].PJ++;

    tablaPosiciones[local].GF += gl;
    tablaPosiciones[local].GC += gv;
    tablaPosiciones[visitante].GF += gv;
    tablaPosiciones[visitante].GC += gl;

    if (gl > gv) {
        tablaPosiciones[local].PG++;
        tablaPosiciones[visitante].PP++;
        tablaPosiciones[local].Pts += 3;
    } else if (gl < gv) {
        tablaPosiciones[visitante].PG++;
        tablaPosiciones[local].PP++;
        tablaPosiciones[visitante].Pts += 3;
    } else {
        tablaPosiciones[local].PE++;
        tablaPosiciones[visitante].PE++;
        tablaPosiciones[local].Pts += 1;
        tablaPosiciones[visitante].Pts += 1;
    }
}

function obtenerResultadosEntre(equipoA, equipoB) {
    const todasFechas = { ...fechasFijas, ...fechasEditables };
    const resultados = [];

    for (const fecha in todasFechas) {
        todasFechas[fecha].forEach(p => {
            if ((p.local === equipoA && p.visitante === equipoB) || (p.local === equipoB && p.visitante === equipoA)) {
                resultados.push({
                    equipo: p.local,
                    rival: p.visitante,
                    gf: parseInt(p.goles_local),
                    gc: parseInt(p.goles_visitante),
                    puntos: p.goles_local > p.goles_visitante ? 3 : (p.goles_local === p.goles_visitante ? 1 : 0)
                });
                resultados.push({
                    equipo: p.visitante,
                    rival: p.local,
                    gf: parseInt(p.goles_visitante),
                    gc: parseInt(p.goles_local),
                    puntos: p.goles_visitante > p.goles_local ? 3 : (p.goles_visitante === p.goles_local ? 1 : 0)
                });
            }
        });
    }

    return resultados;
}

function obtenerTop7Equipos(ignorando = []) {
    const todos = Object.keys(tablaPosiciones)
        .filter(e => !ignorando.includes(e))
        .map(e => ({ nombre: e, ...tablaPosiciones[e] }));

    todos.sort((a, b) => b.Pts - a.Pts);
    return todos.slice(0, 7).map(e => e.nombre);
}

function obtenerPuntosContra(equipo, rivales) {
    let puntos = 0;
    const todasFechas = { ...fechasFijas, ...fechasEditables };

    for (const fecha in todasFechas) {
        todasFechas[fecha].forEach(p => {
            const gl = parseInt(p.goles_local);
            const gv = parseInt(p.goles_visitante);

            // Ignorar partidos sin goles cargados
            if (isNaN(gl) || isNaN(gv)) return;

            if (p.local === equipo && rivales.includes(p.visitante)) {
                const resultado = gl > gv ? 3 : (gl === gv ? 1 : 0);
                puntos += resultado;
            } else if (p.visitante === equipo && rivales.includes(p.local)) {
                const resultado = gv > gl ? 3 : (gv === gl ? 1 : 0);
                puntos += resultado;
            }
        });
    }

    return puntos;
}

function sumarPuntos(resultados, equipo) {
    return resultados.filter(r => r.equipo === equipo).reduce((sum, r) => sum + r.puntos, 0);
}

function sumarGolesAFavor(resultados, equipo) {
    return resultados.filter(r => r.equipo === equipo).reduce((sum, r) => sum + r.gf, 0);
}

function sumarGolesEnContra(resultados, equipo) {
    return resultados.filter(r => r.equipo === equipo).reduce((sum, r) => sum + r.gc, 0);
}

function compararEquipos(a, b) {
    const equipoA = tablaPosiciones[a];
    const equipoB = tablaPosiciones[b];


    if (equipoB.Pts !== equipoA.Pts) {
        return equipoB.Pts - equipoA.Pts;
    }

    // 2.1
    const resultadosMutuos = obtenerResultadosEntre(a, b);
    const puntosA = sumarPuntos(resultadosMutuos, a);
    const puntosB = sumarPuntos(resultadosMutuos, b);
    if (puntosA !== puntosB) {
        criteriosAplicados.push({ equipos: [a, b], criterio: "2.1: Mayor puntaje entre sí" });
        return puntosB - puntosA;
    }

    // 2.2
    const top7 = obtenerTop7Equipos([a, b]);
    const puntosVsTop7A = obtenerPuntosContra(a, top7);
    const puntosVsTop7B = obtenerPuntosContra(b, top7);
    if (puntosVsTop7A !== puntosVsTop7B) {
        criteriosAplicados.push({ equipos: [a, b], criterio: "2.2: Puntaje contra equipos del 1 al 7" });
        return puntosVsTop7B - puntosVsTop7A;
    }

    // 2.3
    const golesAFavorA = sumarGolesAFavor(resultadosMutuos, a);
    const golesAFavorB = sumarGolesAFavor(resultadosMutuos, b);
    if (golesAFavorA !== golesAFavorB) {
        criteriosAplicados.push({ equipos: [a, b], criterio: "2.3: Goles a favor entre sí" });
        return golesAFavorB - golesAFavorA;
    }

    // 2.4
    const golesEnContraA = sumarGolesEnContra(resultadosMutuos, a);
    const golesEnContraB = sumarGolesEnContra(resultadosMutuos, b);
    if (golesEnContraA !== golesEnContraB) {
        criteriosAplicados.push({ equipos: [a, b], criterio: "2.4: Goles en contra entre sí" });
        return golesEnContraA - golesEnContraB;
    }

    // 2.5
    if (equipoA.GC !== equipoB.GC) {
        criteriosAplicados.push({ equipos: [a, b], criterio: "2.5: Goles en contra en el campeonato" });
        return equipoA.GC - equipoB.GC;
    }

    // 2.6
    if (equipoA.GF !== equipoB.GF) {
        criteriosAplicados.push({ equipos: [a, b], criterio: "2.6: Goles a favor en el campeonato" });
        return equipoB.GF - equipoA.GF;
    }


}

function renderExplicacionDesempate(equiposOrdenados) {
    if (explicacionesDesempate.length === 0) {
        document.getElementById("explicacion-desempate").innerHTML = "";
        return;
    }

    const top7 = equiposOrdenados.slice(0, 7);
    const mensajes = explicacionesDesempate.filter(exp =>
        exp.grupo.some(e => top7.includes(e))
    );

    if (mensajes.length === 0) {
        document.getElementById("explicacion-desempate").innerHTML = "";
        return;
    }

    let html = `<strong>Desempates aplicados (solo del 1° al 7°):</strong><ul class="list-disc pl-5 mt-2">`;

    mensajes.forEach(exp => {
        html += `<li class="mb-4"><b>${exp.grupo.join("</b>, <b>")}</b>`;

        // TABLA
        html += `<div class="mt-2"><table class="tabla-desempate border-collapse text-white"><thead><tr><th class="border p-1 bg-slate-700">Criterio</th>`;
        exp.grupo.forEach(equipo => {
            html += `<th class="border p-1 bg-slate-700">${equipo}</th>`;
        });
        html += `</tr></thead><tbody>`;

        if (exp.criterio && Array.isArray(exp.criterio)) {
            exp.criterio.forEach(paso => {
                html += `<tr><td class="border p-1 bg-slate-600">${paso.nombre}</td>`;
                exp.grupo.forEach(e => {
                    html += `<td class="border p-1 text-center">${paso.valores[e] ?? "-"}</td>`;
                });
                html += `</tr>`;
            });
        }

        html += `</tbody></table></div>`;

        // TEXTO DE CLASIFICADOS (debajo de la tabla)
        if (Array.isArray(exp.clasificados) && exp.clasificados.length > 0) {
            html += `<div class="mt-2 text-sm text-green-300">`;
            exp.clasificados.forEach(c => {
                html += `<div><b>${c.equipo}</b> - Clasifica ${c.puesto}° por desempate ${c.criterio}</div>`;
            });
            html += `</div>`;
        }

        html += `</li>`;
    });

    html += `</ul>`;
    document.getElementById("explicacion-desempate").innerHTML = html;
}

function limpiarResultadosFechas() {
    // Resetear valores en la estructura de datos
    Object.keys(fechasEditables).forEach(fecha => {
        fechasEditables[fecha].forEach(partido => {
            partido.goles_local = "";
            partido.goles_visitante = "";
        });
    });

    // Vaciar inputs visibles (aunque sean tipo 'text')
    document.querySelectorAll(".fecha-card input[type='text']").forEach(input => {
        input.value = "";
    });

    calcularTabla();       // Recalcula tabla
    renderFixture();       // Re-renderiza fixture con inputs vacíos
}


function initFiltroEquipos() {
    const select = document.getElementById("equipoFilter");
    equipos.forEach(equipo => {
        const option = document.createElement("option");
        option.value = equipo;
        option.textContent = equipo;
        select.appendChild(option);
    });
}

function filtrarPorEquipo() {
    const equipoSeleccionado = document.getElementById("equipoFilter").value;
    renderFixture(equipoSeleccionado);
}

function initFiltroTablaEquipos() {
    const select = document.getElementById("equipoFilterTabla");
    equipos.forEach(equipo => {
        const option = document.createElement("option");
        option.value = equipo;
        option.textContent = equipo;
        select.appendChild(option);
    });
}

function filtrarTablaPorEquipo() {
    const equipoSeleccionado = document.getElementById("equipoFilterTabla").value;
    const filas = document.querySelectorAll("#tabla-posiciones tr");

    filas.forEach(fila => {
        const equipoNombre = fila.querySelector("td:nth-child(2)");
        if (!equipoNombre) return; // Skip header row

        if (equipoSeleccionado === "TODOS" || equipoNombre.textContent.trim() === equipoSeleccionado) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
}

function ordenarTablaPorCriteriosAvanzados() {
    explicacionesDesempate.length = 0;

    const gruposPorPuntos = {};
    for (const equipo in tablaPosiciones) {
        const pts = tablaPosiciones[equipo].Pts;
        if (!gruposPorPuntos[pts]) gruposPorPuntos[pts] = [];
        gruposPorPuntos[pts].push(equipo);
    }

    const gruposOrdenados = Object.keys(gruposPorPuntos)
        .map(p => parseInt(p))
        .sort((a, b) => b - a)
        .map(pts => gruposPorPuntos[pts]);

    let ordenFinal = [];

    gruposOrdenados.forEach(grupo => {
        if (grupo.length === 1) {
            ordenFinal = ordenFinal.concat(grupo);
        } else {
            grupoRaiz.length = 0;           // reiniciar grupo raíz
            grupoRaiz.push(...grupo);       // copiar el grupo actual
            const grupoOrdenado = ordenarGrupo(grupo, 0, [], [], ordenFinal.length + 1);
            ordenFinal = ordenFinal.concat(grupoOrdenado);
        }
    });

    ordenFinalGlobal = [...ordenFinal];
    explicacionesDesempate.sort((a, b) => b.tamaño - a.tamaño);
    top7Definitivo = ordenFinal.slice(0, 7);
    return ordenFinal;
}

function ordenarGrupo(grupo, indiceCriterio = 0, historial = [], puestosResueltos = [], posicionInicial = 1) {
    const criterios = [
        {
            nombre: "1: Mayor Puntaje entre sí",
            codigo: "1",
            fn: equipo => sumarPuntosEntreGrupo(grupoRaiz, equipo)
        },
        {
            nombre: "2: Mayor Puntaje contra top 7",
            codigo: "2",
            fn: equipo => {
                const rivales = top7Definitivo.filter(e => !grupo.includes(e));
                return obtenerPuntosContra(equipo, rivales);
            }
        },
        {
            nombre: "3: Mayor Cantidad de Goles a favor entre sí",
            codigo: "3",
            fn: equipo => sumarGolesAFavorEntreGrupo(grupoRaiz, equipo)
        },
        {
            nombre: "4: Menor Cantidad de Goles en contra entre sí",
            codigo: "4",
            fn: equipo => sumarGolesEnContraEntreGrupo(grupoRaiz, equipo),
            ascendente: true
        },
        {
            nombre: "5: Menor Cantidad de Goles en contra totales",
            codigo: "5",
            fn: equipo => tablaPosiciones[equipo].GC,
            ascendente: true
        },
        {
            nombre: "6: Mayor Cantidad de Goles a favor totales",
            codigo: "6",
            fn: equipo => tablaPosiciones[equipo].GF
        }
    ];

    if (grupo.length === 1 || indiceCriterio >= criterios.length) return [...grupo];

    const criterio = criterios[indiceCriterio];
    const valores = {};
    grupo.forEach(e => valores[e] = criterio.fn(e));

    historial.push({
        nombre: criterio.nombre,
        codigo: criterio.codigo,
        valores: { ...valores }
    });

    const gruposPorValor = {};
    for (const equipo of grupo) {
        const v = valores[equipo];
        if (!gruposPorValor[v]) gruposPorValor[v] = [];
        gruposPorValor[v].push(equipo);
    }

    const valoresOrdenados = Object.keys(gruposPorValor).sort((a, b) =>
        criterio.ascendente ? a - b : b - a
    );

    let ordenFinal = [];

    for (const valor of valoresOrdenados) {
        const subgrupo = gruposPorValor[valor];
        if (subgrupo.length === 1) {
            const equipo = subgrupo[0];
            const puesto = posicionInicial + ordenFinal.length;
            puestosResueltos.push({
                equipo,
                criterio: criterio.codigo,
                puesto
            });
            ordenFinal.push(equipo);
        } else {
            const ordenado = ordenarGrupo(subgrupo, indiceCriterio + 1, historial, puestosResueltos, posicionInicial + ordenFinal.length);
            ordenFinal.push(...ordenado);
        }
    }

    const top7Simulados = [...ordenFinalGlobal, ...ordenFinal].slice(0, 7);
    if (grupo.length >= 2 && indiceCriterio === 0 && grupo.some(e => top7Simulados.includes(e))) {
        explicacionesDesempate.push({
            grupo: [...grupo],
            historial: [...historial],
            clasificados: [...puestosResueltos],
            tamaño: grupo.length
        });
    }

    return ordenFinal;
}

function obtenerResultadosEntreGrupo(grupo) {
    if (!Array.isArray(grupo) || grupo.length < 2) return [];

    const todasFechas = { ...fechasFijas, ...fechasEditables };
    const resultados = [];

    for (const fecha in todasFechas) {
        todasFechas[fecha].forEach(p => {
            const gl = parseInt(p.goles_local);
            const gv = parseInt(p.goles_visitante);
            if (isNaN(gl) || isNaN(gv)) return;

            if (grupo.includes(p.local) && grupo.includes(p.visitante)) {
                resultados.push({
                    equipo: p.local,
                    rival: p.visitante,
                    gf: gl,
                    gc: gv,
                    puntos: gl > gv ? 3 : (gl === gv ? 1 : 0)
                });
                resultados.push({
                    equipo: p.visitante,
                    rival: p.local,
                    gf: gv,
                    gc: gl,
                    puntos: gv > gl ? 3 : (gv === gl ? 1 : 0)
                });
            }
        });
    }

    return resultados;
}

function sumarPuntosEntreGrupo(grupo, equipo) {
    const resultados = obtenerResultadosEntreGrupo(grupo);
    return resultados
        .filter(r => r.equipo === equipo)
        .reduce((sum, r) => sum + r.puntos, 0);
}

function sumarGolesAFavorEntreGrupo(grupo, equipo) {
    const resultados = obtenerResultadosEntreGrupo(grupo);
    return resultados
        .filter(r => r.equipo === equipo)
        .reduce((sum, r) => sum + r.gf, 0);
}

function sumarGolesEnContraEntreGrupo(grupo, equipo) {
    const resultados = obtenerResultadosEntreGrupo(grupo);
    return resultados
        .filter(r => r.equipo === equipo)
        .reduce((sum, r) => sum + r.gc, 0);
}

function renderExplicacionDesempate(equiposOrdenados) {
    if (explicacionesDesempate.length === 0) {
        document.getElementById("explicacion-desempate").innerHTML = "";
        return;
    }

    const top7 = equiposOrdenados.slice(0, 7);
    const mensajes = explicacionesDesempate.filter(exp =>
        exp.grupo.some(e => top7.includes(e))
    );

    if (mensajes.length === 0) {
        document.getElementById("explicacion-desempate").innerHTML = "";
        return;
    }

    let html = `<strong>Desempates aplicados (solo del 1° al 7°):</strong><ul class="list-disc pl-5 mt-2">`;

    mensajes.forEach(exp => {
        html += `<li class="mb-4"><b>${exp.grupo.join("</b>, <b>")}</b>`;
        html += `<div class="overflow-auto mt-2"><table class="table-auto border-collapse text-xs text-white"><thead><tr><th class="border p-1 bg-slate-700">Criterio</th>`;

        exp.grupo.forEach(equipo => {
            html += `<th class="border p-1 bg-slate-700">${equipo}</th>`;
        });

        html += `</tr></thead><tbody>`;

        if (Array.isArray(exp.historial)) {
            exp.historial.forEach(paso => {
                html += `<tr><td class="border text-left p-1 bg-slate-600">${paso.nombre}</td>`;

                // Determinar qué equipo(s) fueron clasificados por este criterio
                const ganadores = [];
                if (exp.clasificados && paso.valores) {
                    const clasificadosDelPaso = exp.clasificados.filter(c => c.criterio === paso.codigo);

                    if (clasificadosDelPaso.length === 1) {
                        // Solo un clasificado por este criterio → marcarlo directamente
                        ganadores.push(clasificadosDelPaso[0].equipo);
                    } else if (clasificadosDelPaso.length === 2) {
                        // Comparar entre dos para ver quién ganó
                        const [a, b] = clasificadosDelPaso;
                        const valA = paso.valores[a.equipo];
                        const valB = paso.valores[b.equipo];

                        if (valA !== valB) {
                            const asc = paso.nombre.toLowerCase().includes("en contra");
                            const mejor = asc ? (valA < valB ? a.equipo : b.equipo) : (valA > valB ? a.equipo : b.equipo);
                            ganadores.push(mejor);
                        }
                    } else {
                        // Grupo de 3 o más → buscar valor único
                        const valorPorEquipo = {};
                        clasificadosDelPaso.forEach(c => {
                            valorPorEquipo[c.equipo] = paso.valores[c.equipo];
                        });

                        const frecuencia = {};
                        Object.values(valorPorEquipo).forEach(v => {
                            frecuencia[v] = (frecuencia[v] || 0) + 1;
                        });

                        for (const [equipo, valor] of Object.entries(valorPorEquipo)) {
                            if (frecuencia[valor] === 1) {
                                ganadores.push(equipo);
                            }
                        }
                    }
                }


                exp.grupo.forEach(e => {
                    const valor = paso.valores[e] ?? "-";
                    const claseExtra = ganadores.includes(e) ? "bg-lime-500 text-black font-bold" : "";

                    html += `<td class="border p-1 text-center ${claseExtra}">${valor}</td>`;
                });

                html += `</tr>`;
            });
        }

        html += `</tbody></table></div>`;

        if (Array.isArray(exp.clasificados) && exp.clasificados.length > 0) {
            html += `<div class="mt-2 text-sm text-green-300">`;
            exp.clasificados.forEach(c => {
                html += `<div><b>${c.equipo}</b> - Clasifica ${c.puesto}° por desempate ${c.criterio}</div>`;
            });
            html += `</div>`;
        }

        html += `</li>`;
    });

    html += `</ul>`;
    document.getElementById("explicacion-desempate").innerHTML = html;
}

function obtenerAbreviatura(nombre) {
    const map = {
        "REC. ELENENSE": "C.D.R.E.",
        "ATL. INDEPENDIENTE": "C.A.I.",
        "ATL. ASCASUBI": "C.A.A.",
        "VECINOS UNIDOS": "C.V.U.",
        "JUVENTUD AGRARIO": "C.J.A.C.",
        "NAUTICO RUMIPAL": "C.N.R.",
        "DEPORTIVO ITALIANO": "D.I.S.R.",
        "SP. BELGRANO": "C.S.B.",
        "BELGRANO (BERROTARAN)": "B.F.C.",
        "TALLERES (BERROTARAN)": "C.A.T.",
        "9 DE JULIO (RIO TERCERO)": "C.S.9.J.",
        "ATL. RIO TERCERO": "C.A.R.T.",
        "ATL. ALMAFUERTE": "C.A.A.",
        "ESTUDIANTES (HERNANDO)": "C.A.E.",
        "VILLA GENERAL BELGRANO": "V.G.B.",
        "DEP. INDEPENDIENTE": "C.D.I."
    };

    return map[nombre] || nombre;
}


function renderTabla() {
    criteriosAplicados.length = 0;

    const tbody = document.getElementById("tabla-posiciones");
    const equiposOrdenados = ordenarTablaPorCriteriosAvanzados();

    tbody.innerHTML = "";
    equiposOrdenados.forEach((equipo, index) => {
        const t = tablaPosiciones[equipo];
        tbody.innerHTML += `
                <tr>
                    <td class="border px-2 py-1 text-center pos-${index + 1}">${index + 1}</td>
                    <td class="border px-2 py-1 text-center pl-2">
                        <div class="flex items-center gap-2">
                            <img src="${nombreAArchivo(equipo)}" alt="${equipo}" class="escudo-equipo">
                            <span class="abreviado">${obtenerAbreviatura(equipo)}</span>
                            <span class="truncate completo">${equipo}</span>
                        </div>
                    </td>
                    <td class="border px-2 py-1 text-center">${t.PJ}</td>
					<td class="border px-2 py-1 text-center">${t.Pts}</td>
                    <td class="border px-2 py-1 text-center">${t.PG}</td>
                    <td class="border px-2 py-1 text-center">${t.PE}</td>
                    <td class="border px-2 py-1 text-center">${t.PP}</td>
                    <td class="border px-2 py-1 text-center">${t.GF}</td>
                    <td class="border px-2 py-1 text-center">${t.GC}</td>
                    <td class="border px-2 py-1 text-center">${t.GF - t.GC}</td>
                </tr>`;
    });

    renderExplicacionDesempate(equiposOrdenados);
}

renderFixture();
calcularTabla();

window.onload = function () {
    initFiltroEquipos();
    initFiltroTablaEquipos();
    renderFixture();
    calcularTabla();
};









