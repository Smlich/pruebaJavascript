class Persona{
    #nombre;
    #anios;
    #profesion;
    constructor(nombre, anios,profesion){
        this.#nombre = nombre;
        this.#anios = anios;
        this.#profesion = profesion;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this.#nombre = nuevoNombre
        }
    }
    get anios(){
        return this.#anios;
    }
    set anios(nuevosAnios){
        if (nuevosAnios > 0){
            this.#anios = nuevosAnios
        }
    }
    get profesion(){
        return this.#profesion;
    }
    set profesion(nuevaProfesion){
        if(nuevaProfesion.length > 0){
            this.#profesion = nuevaProfesion
        }
    }
    salular(){
        document.write(this.#nombre + ' saluda. <br/>')
    }
    despedirse(){
        document.write(this.#nombre + ' se despide. <br/>')
    }
}
const juan = new Persona('Juan Pedrito', 15, 'Estudiante') 
const maria = new Persona('Maria Jamaica', 23, 'Granjera')
juan.salular()
maria.despedirse()