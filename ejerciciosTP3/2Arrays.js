let nombres = []
do{nombres.push(prompt('Ingrese el nombre de una ciudad.'))
}while(confirm('Quiere ingresar otra ciudad?'));
document.write('<h2>Ciudades</h2>');
document.write('<ul>');
for(let indice=0; indice < nombres.length; indice++ ){
    document.write(`<li>${nombres[indice] } </li>`)
};
document.write('</ul>');;
document.write('<h2>longitud del arreglo: '+ nombres.length + '</h2>');
document.write('primer item: ' + nombres[0]+ '<br>');
document.write('tercer item: ' + nombres[2]+ '<br>');
document.write('ultimo item: ' + nombres[nombres.length - 1]+'<br>');
document.write('</ul>');
nombres.push('Paris');
document.write('<h2>Ciudades</h2>');
document.write('<ul>');
for(let indice=0; indice < nombres.length; indice++ ){
    document.write(`<li>${nombres[indice] } </li>`)
};
document.write('</ul>');;
document.write('La segunda posicion la ocupa: ' + nombres[1] + '<br>')
nombres.splice(1,1, 'Barcelona');
document.write('<h2>Ciudades</h2>');
document.write('<ul>');
for(let indice=0; indice < nombres.length; indice++ ){
    document.write(`<li>${nombres[indice] } </li>`)
};
document.write('</ul>');;
