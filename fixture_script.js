
const container = document.getElementById('fixture-container');
container.innerHTML = '';

Object.entries(fixtureFijas).forEach(([fecha, partidos]) => {
    const fechaTitle = document.createElement('h3');
    fechaTitle.className = 'text-xl font-bold mb-2';
    fechaTitle.innerHTML = `<a name="fecha${fecha}">Fecha ${fecha}</a>`;
    container.appendChild(fechaTitle);

    partidos.forEach((partido, idx) => {
        const card = document.createElement('div');
        card.className = 'card-partido';

        const escudoLocal = escudosMapping[partido.local] ? `<img src="${escudosMapping[partido.local]}" alt="${partido.local}" />` : '';
        const escudoVisitante = escudosMapping[partido.visitante] ? `<img src="${escudosMapping[partido.visitante]}" alt="${partido.visitante}" />` : '';

        card.innerHTML = `
            <div class="equipo">${escudoLocal} ${partido.local}</div>
            <div class="marcador">${partido.golesLocal} - ${partido.golesVisitante}</div>
            <div class="equipo">${partido.visitante} ${escudoVisitante}</div>
        `;
        container.appendChild(card);
    });
});

Object.entries(fixtureEditables).forEach(([fecha, partidos]) => {
    const fechaTitle = document.createElement('h3');
    fechaTitle.className = 'text-xl font-bold mb-2';
    fechaTitle.innerHTML = `<a name="fecha${fecha}">Fecha ${fecha}</a>`;
    container.appendChild(fechaTitle);

    partidos.forEach((partido, idx) => {
        const card = document.createElement('div');
        card.className = 'card-partido';

        const escudoLocal = escudosMapping[partido.local] ? `<img src="${escudosMapping[partido.local]}" alt="${partido.local}" />` : '';
        const escudoVisitante = escudosMapping[partido.visitante] ? `<img src="${escudosMapping[partido.visitante]}" alt="${partido.visitante}" />` : '';

        const keyLocal = `${fecha}_${idx}_local`;
        const keyVisitante = `${fecha}_${idx}_visitante`;

        const golesLocal = resultados[keyLocal] !== undefined ? resultados[keyLocal] : '';
        const golesVisitante = resultados[keyVisitante] !== undefined ? resultados[keyVisitante] : '';

        card.innerHTML = `
            <div class="equipo">${escudoLocal} ${partido.local}</div>
            <div class="marcador">
                <input type="number" min="0" class="editable-input" value="${golesLocal}" 
                    oninput="actualizarResultado('${keyLocal}', this.value, '${keyVisitante}')"> - 
                <input type="number" min="0" class="editable-input" value="${golesVisitante}" 
                    oninput="actualizarResultado('${keyVisitante}', this.value, '${keyLocal}')">
            </div>
            <div class="equipo">${partido.visitante} ${escudoVisitante}</div>
        `;
        container.appendChild(card);
    });
});

function actualizarResultado(key, value, oppositeKey) {
    resultados[key] = value === '' ? undefined : Math.max(0, parseInt(value));

    if (resultados[key] !== undefined && (resultados[oppositeKey] === undefined || resultados[oppositeKey] === '')) {
        resultados[oppositeKey] = 0;
        document.querySelectorAll('input').forEach(input => {
            if (input.getAttribute('oninput') && input.getAttribute('oninput').includes(`'${oppositeKey}'`)) {
                input.value = 0;
            }
        });
    }

    localStorage.setItem('resultados_fixture', JSON.stringify(resultados));
    actualizarTabla();
}

function limpiarResultados() {
    Object.keys(resultados).forEach(key => delete resultados[key]);
    localStorage.removeItem('resultados_fixture');
    location.reload();
}

function actualizarTabla() {
    const tablaBody = document.getElementById('tabla-body');
    const puntos = {};
    const jugados = {};
    const ganados = {};
    const empatados = {};
    const perdidos = {};
    const gf = {};
    const gc = {};

    equipos.forEach(equipo => {
        puntos[equipo] = 0;
        jugados[equipo] = 0;
        ganados[equipo] = 0;
        empatados[equipo] = 0;
        perdidos[equipo] = 0;
        gf[equipo] = 0;
        gc[equipo] = 0;
    });

    const procesarPartidos = (partidos, editable, fecha) => {
        partidos.forEach((partido, idx) => {
            let gl, gv;
            if (editable) {
                const keyLocal = `${fecha}_${idx}_local`;
                const keyVisitante = `${fecha}_${idx}_visitante`;
                if (resultados[keyLocal] === undefined || resultados[keyVisitante] === undefined) return;
                gl = parseInt(resultados[keyLocal]);
                gv = parseInt(resultados[keyVisitante]);
            } else {
                gl = partido.golesLocal;
                gv = partido.golesVisitante;
            }

            jugados[partido.local]++;
            jugados[partido.visitante]++;

            gf[partido.local] += gl;
            gc[partido.local] += gv;

            gf[partido.visitante] += gv;
            gc[partido.visitante] += gl;

            if (gl > gv) {
                puntos[partido.local] += 3;
                ganados[partido.local]++;
                perdidos[partido.visitante]++;
            } else if (gl < gv) {
                puntos[partido.visitante] += 3;
                ganados[partido.visitante]++;
                perdidos[partido.local]++;
            } else {
                puntos[partido.local]++;
                puntos[partido.visitante]++;
                empatados[partido.local]++;
                empatados[partido.visitante]++;
            }
        });
    };

    Object.entries(fixtureFijas).forEach(([fecha, partidos]) => procesarPartidos(partidos, false, fecha));
    Object.entries(fixtureEditables).forEach(([fecha, partidos]) => procesarPartidos(partidos, true, fecha));

    const tabla = equipos.map(equipo => ({
        equipo,
        puntos: puntos[equipo],
        jugados: jugados[equipo],
        ganados: ganados[equipo],
        empatados: empatados[equipo],
        perdidos: perdidos[equipo],
        gf: gf[equipo],
        gc: gc[equipo],
        dif: gf[equipo] - gc[equipo]
    }));

    tabla.sort((a, b) => b.puntos - a.puntos || b.dif - a.dif || b.gf - a.gf);

    tablaBody.innerHTML = tabla.map((t, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><img src="${escudosMapping[t.equipo]}" class="escudo-tabla"> ${t.equipo}</td>
            <td>${t.puntos}</td>
            <td>${t.jugados}</td>
            <td>${t.ganados}</td>
            <td>${t.empatados}</td>
            <td>${t.perdidos}</td>
            <td>${t.gf}</td>
            <td>${t.gc}</td>
            <td>${t.dif}</td>
        </tr>
    `).join('');
}

actualizarTabla();
