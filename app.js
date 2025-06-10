
// Datos iniciales
let initialData = {
  "fixture": {},
  "standings": [
    {
      "EQUIPOS": "BELGRANO (BERROTARAN)",
      "PUNTOS": 24.0,
      "J": 13.0,
      "G": 7.0,
      "E": 3.0,
      "P": 3.0,
      "GF": 26.0,
      "GC": 18.0,
      "DIF": 8.0
    },
    {
      "EQUIPOS": "ATL. RIO TERCERO",
      "PUNTOS": 24.0,
      "J": 13.0,
      "G": 7.0,
      "E": 3.0,
      "P": 3.0,
      "GF": 20.0,
      "GC": 14.0,
      "DIF": 6.0
    },
    {
      "EQUIPOS": "JUVENTUD AGRARIO",
      "PUNTOS": 22.0,
      "J": 13.0,
      "G": 6.0,
      "E": 4.0,
      "P": 3.0,
      "GF": 20.0,
      "GC": 16.0,
      "DIF": 4.0
    },
    {
      "EQUIPOS": "TALLERES (BERROTARAN)",
      "PUNTOS": 21.0,
      "J": 13.0,
      "G": 5.0,
      "E": 6.0,
      "P": 2.0,
      "GF": 19.0,
      "GC": 12.0,
      "DIF": 7.0
    },
    {
      "EQUIPOS": "REC. ELENENSE",
      "PUNTOS": 20.0,
      "J": 13.0,
      "G": 6.0,
      "E": 2.0,
      "P": 5.0,
      "GF": 19.0,
      "GC": 16.0,
      "DIF": 3.0
    },
    {
      "EQUIPOS": "NAUTICO RUMIPAL",
      "PUNTOS": 19.0,
      "J": 13.0,
      "G": 5.0,
      "E": 4.0,
      "P": 4.0,
      "GF": 17.0,
      "GC": 18.0,
      "DIF": -1.0
    },
    {
      "EQUIPOS": "9 DE JULIO (RIO TERCERO)",
      "PUNTOS": 18.0,
      "J": 13.0,
      "G": 5.0,
      "E": 3.0,
      "P": 5.0,
      "GF": 18.0,
      "GC": 13.0,
      "DIF": 5.0
    },
    {
      "EQUIPOS": "SP. BELGRANO",
      "PUNTOS": 18.0,
      "J": 13.0,
      "G": 5.0,
      "E": 3.0,
      "P": 5.0,
      "GF": 20.0,
      "GC": 19.0,
      "DIF": 1.0
    },
    {
      "EQUIPOS": "DEP. INDEPENDIENTE",
      "PUNTOS": 18.0,
      "J": 13.0,
      "G": 4.0,
      "E": 6.0,
      "P": 3.0,
      "GF": 17.0,
      "GC": 18.0,
      "DIF": -1.0
    },
    {
      "EQUIPOS": "ATL. ALMAFUERTE",
      "PUNTOS": 17.0,
      "J": 13.0,
      "G": 5.0,
      "E": 2.0,
      "P": 6.0,
      "GF": 21.0,
      "GC": 26.0,
      "DIF": -5.0
    },
    {
      "EQUIPOS": "VILLA GENERAL BELGRANO",
      "PUNTOS": 16.0,
      "J": 13.0,
      "G": 4.0,
      "E": 4.0,
      "P": 5.0,
      "GF": 15.0,
      "GC": 13.0,
      "DIF": 2.0
    },
    {
      "EQUIPOS": "ATL. ASCASUBI",
      "PUNTOS": 15.0,
      "J": 13.0,
      "G": 3.0,
      "E": 6.0,
      "P": 4.0,
      "GF": 18.0,
      "GC": 22.0,
      "DIF": -4.0
    },
    {
      "EQUIPOS": "ATL. INDEPENDIENTE",
      "PUNTOS": 14.0,
      "J": 13.0,
      "G": 3.0,
      "E": 5.0,
      "P": 5.0,
      "GF": 13.0,
      "GC": 14.0,
      "DIF": -1.0
    },
    {
      "EQUIPOS": "ESTUDIANTES (HERNANDO)",
      "PUNTOS": 14.0,
      "J": 13.0,
      "G": 4.0,
      "E": 2.0,
      "P": 7.0,
      "GF": 9.0,
      "GC": 18.0,
      "DIF": -9.0
    },
    {
      "EQUIPOS": "VECINOS UNIDOS",
      "PUNTOS": 13.0,
      "J": 13.0,
      "G": 1.0,
      "E": 10.0,
      "P": 2.0,
      "GF": 19.0,
      "GC": 20.0,
      "DIF": -1.0
    },
    {
      "EQUIPOS": "DEPORTIVO ITALIANO",
      "PUNTOS": 6.0,
      "J": 13.0,
      "G": 1.0,
      "E": 3.0,
      "P": 9.0,
      "GF": 11.0,
      "GC": 25.0,
      "DIF": -14.0
    }
  ]
};

// Cargamos posibles datos previos de LocalStorage
const savedFixture = localStorage.getItem('fixtureData');
if (savedFixture) {
    try {
        const parsed = JSON.parse(savedFixture);
        Object.keys(parsed).forEach(fecha => {
            parsed[fecha].forEach((match, index) => {
                initialData.fixture[fecha][index].Goles_Local = match.Goles_Local;
                initialData.fixture[fecha][index].Goles_Visitante = match.Goles_Visitante;
            });
        });
    } catch(e) {
        console.error('Error al leer LocalStorage', e);
    }
}


// ... resto del código que teníamos generado antes ...

