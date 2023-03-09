let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
do{
    let numero = parseInt(prompt('Ingrese su numero de DNI'));
    if (isNaN(numero)) {
        alert('Eso no es un numero');
    }else if (numero <= 99999999 && numero > 0){
        division = parseInt(numero % 23) 
        letraResultante = letras.charAt(division)
        alert(letraResultante); 
    }else{
        alert('No es un numero de DNI valido')
    };
}while(confirm('Quiere ingresar otro DNI?'))
document.write('<h1>' + letraResultante + '</h1>' )
