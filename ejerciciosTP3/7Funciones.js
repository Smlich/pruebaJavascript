let numero = parseInt(prompt('ingrese un numero'))
function tablaMultiplicar(numero){
    for (i=1; i<11; i++){
        document.write(i + '*' + numero + '= ' + (numero * i) + '<hr>')
    }
}
tablaMultiplicar(numero)