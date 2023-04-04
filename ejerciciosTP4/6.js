class Libro{
    #isbn;
    #titulo;
    #autor;
    #numeroDePaginas;
    constructor(isbn,titulo,autor,numeroDePaginas){
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor= autor;
        this.#numeroDePaginas = numeroDePaginas;
    }
    get isbn(){
        return this.#isbn;
    }
    set isbn(nuevoIsbn){
        if(nuevoIsbn.length > 0){
            this.#isbn = nuevoIsbn
        }
    }
    get titulo(){
        return this.#titulo 
    }
    set titulo(nuevoTitulo){
        if(nuevoIsbn.length > 0){
            this.#titulo = nuevoTitulo
        }
    }
    get autor(){
        return this.#autor
    }
    set autor(nuevoAutor){
        if(nuevoAutor.length > 0){
            this.#autor = nuevoAutor
        }
    }
    get numeroDePaginas(){
        return this.#numeroDePaginas
    }
    set numeroDePaginas(nuevoNumeroDePaginas){
        if(nuevoNumeroDePaginas > 0){
            this.#numeroDePaginas = nuevoNumeroDePaginas
        }
    }
    mostarLibro(){
        document.write('El libro '+ this.#titulo +' con ISBN '+ this.#isbn +' creado por el autor '+ this.#autor + ' tiene ' + this.#numeroDePaginas+' paginas. <br/>'  )
    }
}
function compararPaginas(numerodepaginasA,numeroDePaginasB,nombreLibroA,nombreLibroB){
    if(numerodepaginasA>numeroDePaginasB){
        document.write('El libro '+ nombreLibroA + ' tiene más paginas.')
    }else document.write('El libro '+ nombreLibroB +'tiene más paginas.')
}
const mangaOnepice = new Libro('xxxx','Manga One piece','Echiro Oda',999999999) 
const libroGenerico = new Libro('yyyy','Libro Generico','Escritor Generico',300)
mangaOnepice.mostarLibro()
compararPaginas(mangaOnepice.numeroDePaginas, libroGenerico.numeroDePaginas,mangaOnepice.titulo,libroGenerico.titulo)