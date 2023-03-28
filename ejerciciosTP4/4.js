function Producto(codigo,nombre,precio){
    this.codigo = codigo
    this.nombre = nombre
    this.precio = precio
    this.imprimeDatos = function(nombreObjeto){
        document.write((JSON.stringify(nombreObjeto, null, 5)) + ' <br/>')
    }
}
let producto1 = new Producto(1,'Ak47',1500)
let producto2 = new Producto(2,'MobyDick',1700)
let producto3 = new Producto(3,'Gelato Mandarine',1400)
let productos=[producto1,producto2,producto3]
for (let i = 0; i < productos.length; i++){
    let producto = productos[i];
    producto.imprimeDatos(producto)
}