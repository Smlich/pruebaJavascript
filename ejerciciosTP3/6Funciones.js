let ladoA = parseInt(prompt('ingrese la medida de uno de los lados'))
let ladoB = parseInt(prompt('ingrese la medida del otro lado'))
function calularPerimetro(ladoA,ladoB){
    perimetro = (ladoA + ladoB) * 2
    document.write(perimetro)
}
calularPerimetro(ladoA,ladoB)