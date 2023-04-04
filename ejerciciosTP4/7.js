class Agenda {
    #contactos
    #tamanio
    constructor(tamanio){
        this.#contactos = [],
        this.#tamanio = tamanio
    }
    get tamanio(){
        return this.#tamanio
    }
    set tamanio(nuevoTamanio){
        if(nuevoTamanio > 0){
            this.#tamanio = nuevoTamanio
        }
    }
    get contactos(){
        return this.#contactos
    }
    set contactos(nuevoContacto){
        this.#contactos = nuevoContacto
    }
    añadirContacto(contacto){
        if(this.#contactos.length < this.#tamanio){
            this.#contactos.push(contacto) 
        }else[
            document.write('La agenda esta llena, no puede agregar más contactos. <br/>')
        ]
    }
    listarContactos(){
        document.write('<table class="table"><thead><tr><th>Nombre</th><th>Numero</th></tr></thead><tbody>')
    for (let i = 0 ;i < this.#contactos.length ;i++){
        let contacto = this.#contactos [i]
        document.write('<tr><td>' + contacto.nombre + '</td><td>' + contacto.numero + '</td>')
    }
    document.write('</tbody></table>')
    }
}
class Contacto{
    #nombre
    #numero
    constructor(nombre,numero){
        this.#nombre = nombre;
        this.#numero = numero;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this.#nombre = nuevoNombre
        }
    }
    get numero(){
        return this.#numero;
    }
    set numero(nuevoNumero){
        if(nuevoNumero > 0){
            this.#numero = nuevoNumero
        }
    }
}
let agenda1 =new Agenda(2)
const Juan = new Contacto('Juan Antonio','3816168898')

agenda1.añadirContacto(Juan)
agenda1.añadirContacto(Juan)
agenda1.añadirContacto(Juan)
console.log(agenda1.contactos)
agenda1.listarContactos()