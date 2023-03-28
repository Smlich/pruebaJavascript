let persona = {
    nombre: 'Facundo',
    apellido: 'Gomez',
    edad: 26,
    estudiante: true,
    hobbies: ['futbol ','jugar videojuegos ','viajar'],
    presentar: function(){
        document.write('Me presento, yo soy: ' + JSON.stringify(persona, null, 5) + '<br/>')
    },
    agregar: function(hobbieAgregado){
        persona.hobbies.unshift(hobbieAgregado)
    },
    quitar: function(lugarHobbieBorrar){
        persona.hobbies.splice(lugarHobbieBorrar, 1)
    },
    buscarHobbie:function(hobbieBuscado){
        if (persona.hobbies.includes(hobbieBuscado)){
        document.write('Esta persona si tiene como hobbie ' + hobbieBuscado +'<br/>')
        }else{
        document.write('Esta persona no tiene como hobbie ' + hobbieBuscado + '<br/>')
        }
    }
}
document.write('hobbies: ' + persona.hobbies + '<br/>')
persona.agregar('cocinar ')
persona.agregar('programar ')
persona.agregar('jardineria ')
document.write('hobbies: ' + persona.hobbies + '<br/>')
persona.buscarHobbie('viajar')
persona.quitar(0)
document.write('hobbies: ' + persona.hobbies + '<br/>')
