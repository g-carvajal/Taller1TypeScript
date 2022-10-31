"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
let tablaSeries = document.getElementById("idSeries");
let tablaPromedio = document.getElementById("promedio");
console.log(data_js_1.series);
mostrarDatos(data_js_1.series);
promTempSeries(data_js_1.series);
function mostrarDatos(series) {
    let seriesTbody = document.createElement("tbody");
    series.forEach(Serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${Serie.id}</th>
                                <td>${Serie.nombre}</td>
                                <td>${Serie.plataforma}</td>
                                <td>${Serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    });
    tablaSeries.appendChild(seriesTbody);
}
function promTempSeries(series) {
    let numTemporadas = 0;
    let numSeries = 0;
    series.forEach(Serie => {
        numTemporadas += Serie.temporadas;
        numSeries++;
    });
    let promedio = numTemporadas / numSeries;
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Promedio temporadas: <b></td>
                        <td>${promedio}</td>`;
    tablaPromedio.appendChild(trElement);
}
