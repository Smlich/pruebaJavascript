let frase= prompt('Ingrese una frase');
let largoFrase = frase.length
for (let i = 0; i < frase.length ; i++){
    document.write (frase.charAt(largoFrase -1))
    largoFrase--
};