let repeticiones = parseInt(prompt('Ingrese un numero hasta el 50'))
if(repeticiones <=50){
    for(x = 1; x<=repeticiones; repeticiones--){
        for (i = 1; i<=repeticiones; i++){
            document.write( repeticiones + ' ')
        }
        document.write('<br/>')    
    }
}else{
    alert('El numero debe ser menor o igual a 50')
}