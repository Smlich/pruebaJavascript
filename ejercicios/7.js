let numeroA = parseInt(prompt('Ingrese un numero'));
let numeroB = parseInt(prompt('Ingrese otro numero'));
let numeroC = parseInt(prompt('Ingrese otro numero'));
if (numeroA > numeroB && numeroA > numeroC ) {
    document.write ('El numero mayor es ' + numeroA)
}else if (numeroB > numeroC){
    document.write ('El numero mayor es ' + numeroB)
}else if (numeroC > numeroB){
    document.write ('El numero mayor es ' + numeroC)
}else{
    document.write ('Los tres numeros son iguales')
};