let numeroVocales = 0;
let frase= prompt('Ingrese una frase');
for (let i = 0; i < frase.length ; i++){
    if (frase.charAt(i) == 'a' || frase.charAt(i) == 'A' || frase.charAt(i) == 'e' || frase.charAt(i) == 'E' || frase.charAt(i) == 'i' || frase.charAt(i) == 'I' || frase.charAt(i) == 'o'|| frase.charAt(i) == 'O'||frase.charAt(i) == 'u' || frase.charAt(i) == 'U'){
        numeroVocales++  
    }
};
document.write (numeroVocales);