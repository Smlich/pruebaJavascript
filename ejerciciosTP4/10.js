class Aeropuerto{
    #nombreAeropuerto;
    #listaAviones;
    constructor(nombreAeropuerto){
        this.#nombreAeropuerto = nombreAeropuerto;
        this.#listaAviones = [];
    }
    get nombreAeropuerto(){
        return this.#nombreAeropuerto
    }
    set nombreAeropuerto(nombreAeropuertoNuevo){
        if(nombreAeropuertoNuevo.length > 0){
            this.#nombreAeropuerto = nombreAeropuertoNuevo
        }
    }
    get listaAviones(){
        return this.#listaAviones
    }
    set listaAviones(listaAvionesNueva){
        if(listaAvionesNueva.length > 0){
            this.#listaAviones = listaAvionesNueva
        }
    }
    agregarAvion(objetoAvion){
        this.#listaAviones.push(objetoAvion)
    }
    buscarAvion(avionBuscado){
        let avionesEncontrados = 0
        for(let i = 0;i < this.#listaAviones.length; i++){
            if(this.#listaAviones[i].nombre.includes(avionBuscado)){
                document.write('Nombre del avion: '+this.#listaAviones[i].nombre+ '<br/>' +'Capacidad: '+this.#listaAviones[i].capacidad +'<br/>'+'Destino: '+this.#listaAviones[i].destino+'<br/>'+'Lista de Pasajeros: '+this.#listaAviones[i].listaPasajeros+'<hr/>');
                avionesEncontrados++;
            }
        }
        if (avionesEncontrados == 0){
            document.write('No encontramos el avion que esta buscando.')
        }
        
    }
}
class Avion{
    #nombre;
    #capacidad;
    #destino; 
    #listaPasajeros;
    constructor(nombre,capacidad,destino,){
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#destino = destino;
        this.#listaPasajeros=[];
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if (nuevoNombre.length> 0){
            this.#nombre = nuevoNombre
        }
    }
    get capacidad(){
        return this.#capacidad;
    }
    set capacidad(nuevaCapacidad){
        if (nuevaCapacidad > 0){
            this.#capacidad = nuevaCapacidad
        }
    }
    get destino(){
        return this.#destino;
    }
    set destino(nuevoDestino){
        if (nuevoDestino.length > 0){
            this.#destino = nuevoDestino
        }
    }
    get listaPasajeros(){
        return this.#listaPasajeros;
    }
    set listaPasajeros(nuevaListaPasajeros){
        if (nuevaListaPasajeros.length> 0){
            this.#listaPasajeros = nuevaListaPasajeros
        }
    }
    abordar(pasajero){
        if(this.listaPasajeros.length < this.capacidad){
            this.#listaPasajeros.push(pasajero)
        }else[
            document.write('El avion esta lleno, no puede abordar.')
        ]
    }
}
const aeropuerto1 = new Aeropuerto('Aeropuerto Internacional')
const avion1 = new Avion('Boing717', 50, 'Hawai')
const avion2 = new Avion('Concord', 20, 'Tucuman')
const avion3 = new Avion('AvionGenerico', 25, 'Salta')
aeropuerto1.agregarAvion(avion1)
aeropuerto1.agregarAvion(avion2)
aeropuerto1.agregarAvion(avion3)
aeropuerto1.buscarAvion('Boing717')
avion1.abordar('Juan Pedrito')
aeropuerto1.buscarAvion('Boing717')
