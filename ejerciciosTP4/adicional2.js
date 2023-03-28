let calculadora ={
    numeroA: 0,
    numeroB: 0,
    sumar: function(numeroA, numeroB){
        document.write (numeroA + numeroB + '<br/>')
    },
    restar: function(numeroA, numeroB){
        document.write(numeroA - numeroB + '<br/>')
    },
    multiplicar: function(numeroA,numeroB){
        document.write(numeroA*numeroB + '<br/>' )
    },
    dividir: function(numeroA,numeroB){
        if (numeroB =! 0){
            document.write(numeroA/numeroB + '<br/>' )
        }else{
            document.write('No se puede dividir un numero por 0 <br/>')
        }
    }
}
calculadora.sumar(1,10)
calculadora.sumar(4,15)
calculadora.restar(2,1)
calculadora.restar(1,10)
calculadora.multiplicar(2,7)
calculadora.multiplicar(15,3)
calculadora.dividir(10/2)
calculadora.dividir(1/5)