let peliculas = ['enero', 'febrero', 'marzo', 'abril', 'junio', 'julio', 'agosto', 'septiembre','octubre','noviembre', 'diciembre' ];
document.write('<h2>Meses del año</h2>');
document.write('<ul>');
for(let indice=0; indice < peliculas.length; indice++ ){
    document.write(`<li>${peliculas[indice] } </li>`);
}
document.write('</ul>');