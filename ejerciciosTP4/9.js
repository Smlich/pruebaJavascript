class Animal{
    #nombre
    #edad
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this.#nombre = nuevoNombre
        }
    }
    get edad(){
        return this.#edad;
    }
    set edad(nuevaEdad){
        if (nuevaEdad.length > 0){
            this.#edad = nuevaEdad
        }
    }
    emitirSonido(){
        document.write('sonido generico.')
    }
}
class Perro extends Animal{
    emitirSonido(){
        document.write('GUAU GUAU. <br/>')
    }
}
class Gato extends Animal{
    emitirSonido(){
        document.write('MIAU MIAU. <br/>')
    }
}
const pancho = new Perro('Pancho N°2', 4)
pancho.emitirSonido()
const sicario = new Gato('Sicario Juan', 6)
sicario.emitirSonido()