let numero = parseInt(prompt('Ingrese un numero'));
if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0){
    document.write ('Si es divisible por: <br>')
}else{
    document.write ('No es divisible por 2,3,5 ni 7')
} ;

if (numero % 2 === 0){
    document.write('2 <br/>')
};
if (numero % 3 === 0){
    document.write('3 <br/>')
};
if (numero % 5 === 0){
    document.write('5 <br/>')
};
if (numero % 7 === 0){
    document.write('7 <br/>')
};
