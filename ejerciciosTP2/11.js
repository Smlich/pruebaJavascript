let nombre1 = prompt('Ingresa un nombre')
let edad1 = parseInt(prompt ('Ingresa su edad'))
let nombre2 = prompt('Ingresa un segundo nombre')
let edad2 = parseInt(prompt ('Ingresa su edad'))
let nombre3 = prompt('Ingresa un tercer nombre')
let edad3 = parseInt(prompt ('Ingresa su edad'))
if(edad1 == Math.max(edad1, edad2, edad3)){
    document.write('El mayor es ' +nombre1)
}else if (edad2 == Math.max(edad1, edad2, edad3)){
    document.write('El mayor es ' +nombre2)
}else{
    document.write('El mayor es ' +nombre3)
}

