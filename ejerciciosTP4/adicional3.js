function crearTabla(lista){
    document.write('<table class="table"><thead><tr><th>Producto</th><th>Categoria</th><th>Precio</th></tr></thead><tbody>')
    for (let i = 0 ;i < lista.length ;i++){
        let producto = lista[i]
        document.write('<tr><td>' + producto.nombreProducto + '</td><td>' + producto.categoria + '</td><td>' + producto.precio + '</td></tr>')
    }
    document.write('</tbody></table>')
}
let listaProductos = [
    {
    nombreProducto: "Hidratante facial",
    precio: 3500,
    categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
    nombreProducto: "Protector solar factor 50",
    precio: 3300,
    categoria: "Protector solar",
    },
    {
    nombreProducto: "Protector solar toque seco factor 50",
    precio: 4100,
    categoria: "Protector solar",
    },
    {
    nombreProducto: "Protector solar con color factor 50",
    precio: 3850.5,
    categoria: "Protector solar",
    },
    {
    nombreProducto: "Gel de limpieza facial",
    precio: 1740.99,
    categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
    nombreProducto: "Exfoliante de azúcar cherry",
    precio: 1200,
    categoria: "Labios",
    },
    {
    nombreProducto: "Pads de hidrogel para contorno de ojos",
    precio: 2800,
    categoria: "Ojos",
    },
    {
    nombreProducto: "Mascarilla facial",
    precio: 3250.99,
    categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
    nombreProducto: "Protector solar en barra",
    precio: 3800,
    categoria: "Protector solar",
    },
    {
    nombreProducto: "Mascara de hidratación y reparación",
    precio: 1200,
    categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
    ];
crearTabla(listaProductos)
let listaProtectoresSolares = listaProductos.filter(producto => producto.categoria.includes ("Protector"));
crearTabla(listaProtectoresSolares)
let serum = [listaProductos.find(producto => producto.nombreProducto.includes("Sérum"))]
crearTabla(serum)
let bruma = listaProductos.find(producto => producto.nombreProducto.includes("Bruma"))
document.write(`<p>Bruma: ${ bruma === undefined ? 'no encontramos el producto solicitado' : bruma }</p>`)

