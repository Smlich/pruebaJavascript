do{
    let tiradaCliente = parseInt(prompt('Elija una tirada: 1-Piedra, 2-Papel, 3-Tijera'));
    let tiradaCpu = Math.floor(Math.random()*3)+1;
    console.log(tiradaCliente)
    console.log(tiradaCpu)
    switch (tiradaCliente){
        case 1:
            if(tiradaCliente == tiradaCpu){
                alert('Ambos eligieron piedra, es un empate')
            }else if(tiradaCpu == 2){
                alert('El CPU tiro papel gana el CPU :(')
            }else{
                alert('Ganaste :D, el CPU tiro tijera')
            };
            break;
            case 2:
                if(tiradaCliente == tiradaCpu){
                alert('Ambos eligieron papel, es un empate')
            }else if(tiradaCpu == 1){
                alert('Ganaste :D, el CPU tiro Piedra')
            }else{
                alert('El CPU tiro tijera gana el CPU :(')
            };
            break;
            case 3:
            if(tiradaCliente == tiradaCpu){
                alert('Ambos eligieron Tijera, es un empate')
            }else if(tiradaCpu == 2){
                alert('Ganaste :D, el CPU tiro papel')
            }else{
                alert('El CPU tiro Piedra, gana el CPU :(')
            };
            break;
        default:
            alert('No es una jugada valida')
        }
    }while(confirm('Quiere jugar de nuevo?'))
