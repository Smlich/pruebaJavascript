let resultado = 0;
do {
    let numeroASumar =parseInt (prompt('Ingrese un numero'));
    if (isNaN(numeroASumar)) {
        alert('Eso no es un numero');
    }else{
        resultado = resultado + numeroASumar 
    }; 
}while (confirm('Quiere ingresar otro numero?'));

document.write(resultado);
