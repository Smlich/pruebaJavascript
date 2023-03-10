const filas = prompt('Ingrese el numero de filas');
const columnas = prompt('Ingrese el numero de columnas');
let numeroCeldas = filas * columnas;
document.write('<table><tbody>');
for (let indiceFilas=0; indiceFilas < filas; indiceFilas++){
    document.write('<tr>')
        for( let indiceColumnas=0;  indiceColumnas <columnas; indiceColumnas++){
            document.write('<td class="p-2" >'+ numeroCeldas + '</td>')
            numeroCeldas--
        }
    document.write('</tr>')
};
document.write('</tbody></table>');