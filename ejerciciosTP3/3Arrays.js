let sumaDados = []
let cantidadApariciones= []
let sumanDos = 0
let sumanTres = 0
let sumanCuatro = 0
let sumanCinco = 0
let sumanSeis = 0
let sumanSiete = 0
let sumanOcho = 0
let sumanNueve = 0
let sumanDiez = 0
let sumanOnce = 0
let sumanDose = 0
for(i = 0;i < 100; i++ ){
    dadoUno = Math.floor(Math.random()*6)+1
    dadoDos = Math.floor(Math.random()*6)+1
    sumaDados.push(dadoUno + dadoDos)
    switch(sumaDados[i]){
        case 2:
            sumanDos++
            break;  
        case 3:
            sumanTres++
            break;
        case 4:
            sumanCuatro++
            break;
        case 5:
            sumanCinco++
            break;
        case 6:
            sumanSeis++
            break;
        case 7:
            sumanSiete++
            break;
        case 8:
            sumanOcho++
            break;
        case 9:
            sumanNueve++
            break;
        case 10:
            sumanDiez++
            break;
        case 11:
            sumanOnce++
            break;
        case 12:
            sumanDose++
            break;
    }
}
cantidadApariciones.push(sumanDos)
cantidadApariciones.push(sumanTres)
cantidadApariciones.push(sumanCuatro)
cantidadApariciones.push(sumanCinco)
cantidadApariciones.push(sumanSeis)
cantidadApariciones.push(sumanSiete)
cantidadApariciones.push(sumanOcho)
cantidadApariciones.push(sumanNueve)
cantidadApariciones.push(sumanDiez)
cantidadApariciones.push(sumanOnce)
cantidadApariciones.push(sumanDose)

document.write('<table><tbody>');
document.write('<td class="p-2">Suma<td/>' +'<class="p-2">Cantidad de apariciones<td/>')
for (let indiceFilas=0; indiceFilas < 11; indiceFilas++){
    document.write('<tr>')
    document.write('</td><td class="p-2 text-center">' + (indiceFilas+2)+ '</td>' + '<td class="p-2 text-center" >'+ cantidadApariciones[indiceFilas])
    document.write('</tr>')
    
};  
document.write('</tbody></table>');


console.log(cantidadApariciones)
console.log(sumaDados)