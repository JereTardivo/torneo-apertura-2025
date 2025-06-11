

// Render fixture
function renderFixture() {
    const container = document.getElementById('fixture-container');
    container.innerHTML = '';

    // Fechas fijas
    for (const fecha in fixtureFijas) {
        const div = document.createElement('div');
        div.innerHTML = `<h3 class="text-lg font-semibold text-blue-700 mb-2">Fecha ${fecha}</h3>`;
        const table = document.createElement('table');
        table.className = 'table w-full bg-white';
        table.innerHTML = `
            <thead class="bg-gray-200">
                <tr>
                    <th>Local</th>
                    <th>Goles Local</th>
                    <th>Goles Visitante</th>
                    <th>Visitante</th>
                </tr>
            </thead>
            <tbody>
                ${fixtureFijas[fecha].map(partido => `
                    <tr>
                        <td>${escudosMapping[partido['Local']] ? `<img src="${escudosMapping[partido['Local']]}" class="escudo"/>` : ''} ${partido['Local']}</td>
                        <td>${partido['Goles Local']}</td>
                        <td>${partido['Goles Visitante']}</td>
                        <td>${escudosMapping[partido['Visitante']] ? `<img src="${escudosMapping[partido['Visitante']]}" class="escudo"/>` : ''} ${partido['Visitante']}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        div.appendChild(table);
        container.appendChild(div);
    }

    // Fechas editables
    for (const fecha in fixtureEditables) {
        const div = document.createElement('div');
        div.innerHTML = `<h3 class="text-lg font-semibold text-blue-700 mb-2">Fecha ${fecha}</h3>`;
        const table = document.createElement('table');
        table.className = 'table w-full bg-white';
        table.innerHTML = `
            <thead class="bg-gray-200">
                <tr>
                    <th>Local</th>
                    <th>Goles Local</th>
                    <th>Goles Visitante</th>
                    <th>Visitante</th>
                </tr>
            </thead>
            <tbody>
                ${fixtureEditables[fecha].map((partido, idx) => `
                    <tr>
                        <td>${escudosMapping[partido['Local']] ? `<img src="${escudosMapping[partido['Local']]}" class="escudo"/>` : ''} ${partido['Local']}</td>
                        <td><input type="number" min="0" pattern="[0-9]*" inputmode="numeric" class="editable-input border" data-fecha="${fecha}" data-idx="${idx}" data-team="local" value="${(resultados[fecha]?.[idx]?.local ?? '')}" onchange="updateResultado(event)" /></td>
                        <td><input type="number" min="0" pattern="[0-9]*" inputmode="numeric" class="editable-input border" data-fecha="${fecha}" data-idx="${idx}" data-team="visitante" value="${(resultados[fecha]?.[idx]?.visitante ?? '')}" onchange="updateResultado(event)" /></td>
                        <td>${escudosMapping[partido['Visitante']] ? `<img src="${escudosMapping[partido['Visitante']]}" class="escudo"/>` : ''} ${partido['Visitante']}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        div.appendChild(table);
        container.appendChild(div);
    }
}

function updateResultado(event) {
    const input = event.target;
    const fecha = input.dataset.fecha;
    const idx = input.dataset.idx;
    const team = input.dataset.team;

    let value = parseInt(input.value);
    if (isNaN(value) || value < 0) {
        value = 0;
        input.value = value;
    }

    if (!resultados[fecha]) resultados[fecha] = {}
    if (!resultados[fecha][idx]) resultados[fecha][idx] = {local: null, visitante: null};

    resultados[fecha][idx][team] = value;

    const fila = input.closest('tr');
    const otroCampo = fila.querySelector(`input[data-team="${team === 'local' ? 'visitante' : 'local'}"]`);
    if (otroCampo.value === '') {
        otroCampo.value = 0;
        resultados[fecha][idx][team === 'local' ? 'visitante' : 'local'] = 0;
    }

    localStorage.setItem('resultados_fixture', JSON.stringify(resultados));

    calcularTabla();
}

function limpiarResultados() {
    if (confirm('¿Estás seguro de que deseas limpiar los resultados? Esta acción no se puede deshacer.')) {
        resultados = {}
        localStorage.removeItem('resultados_fixture');
        renderFixture();
        calcularTabla();
    }
}

function calcularTabla() {
    const tabla = {}
    equipos.forEach(e => {
        tabla[e] = {Pts:0, J:0, G:0, E:0, P:0, GF:0, GC:0};
    });

    for (const fecha in fixtureFijas) {
        fixtureFijas[fecha].forEach(partido => {
            procesarPartido(tabla, partido['Local'], partido['Visitante'], parseInt(partido['Goles Local']), parseInt(partido['Goles Visitante']));
        });
    }

    for (const fecha in fixtureEditables) {
        fixtureEditables[fecha].forEach((partido, idx) => {
            const res = resultados[fecha]?.[idx];
            if (res && res.local != null && res.visitante != null) {
                procesarPartido(tabla, partido['Local'], partido['Visitante'], res.local, res.visitante);
            }
        });
    }

    renderTabla(tabla);
}

function procesarPartido(tabla, local, visitante, golesLocal, golesVisitante) {
    tabla[local].J +=1;
    tabla[visitante].J +=1;
    tabla[local].GF += golesLocal;
    tabla[local].GC += golesVisitante;
    tabla[visitante].GF += golesVisitante;
    tabla[visitante].GC += golesLocal;

    if (golesLocal > golesVisitante) {
        tabla[local].Pts +=3;
        tabla[local].G +=1;
        tabla[visitante].P +=1;
    } else if (golesLocal < golesVisitante) {
        tabla[visitante].Pts +=3;
        tabla[visitante].G +=1;
        tabla[local].P +=1;
    } else {
        tabla[local].Pts +=1;
        tabla[visitante].Pts +=1;
        tabla[local].E +=1;
        tabla[visitante].E +=1;
    }
}

function renderTabla(tabla) {
    const body = document.getElementById('tabla-body');
    body.innerHTML = '';

    const sortedEquipos = Object.entries(tabla).sort((a,b) => b[1].Pts - a[1].Pts || (b[1].GF - b[1].GC) - (a[1].GF - a[1].GC));

    sortedEquipos.forEach(([equipo, stats], idx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${idx+1}</td>
            <td>${escudosMapping[equipo] ? `<img src="${escudosMapping[equipo]}" class="escudo-tabla"/>` : ''} ${equipo}</td>
            <td>${stats.Pts}</td>
            <td>${stats.J}</td>
            <td>${stats.G}</td>
            <td>${stats.E}</td>
            <td>${stats.P}</td>
            <td>${stats.GF}</td>
            <td>${stats.GC}</td>
            <td>${stats.GF - stats.GC}</td>
        `;
        body.appendChild(row);
    });
}

renderFixture();
calcularTabla();
