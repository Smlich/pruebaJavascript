function analizarFrase(frase){
    if(frase == frase.toLowerCase()){
        document.write('la frase solo esta formada por minusculas')
    }else if(frase == frase.toUpperCase()){
        document.write('la frase solo esta formada por mayusculas')
    }else{
        document.write('la frase contiene mayusculas y minusculas')
    }
}