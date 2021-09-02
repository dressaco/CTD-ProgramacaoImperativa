/* Participantes:
Alisson Bittencourt
Andressa Malta
Eduardo Garcia
Emerson B Tenorio
Everton Garcia
Samara Melk*/

function podeSubir(altura,acompanhada) {
    let msg;
    if (altura > 1.4 && altura < 2) {
        msg = 'Acesso autorizado.';
    } else if (altura > 1.2 && acompanhada) {
        msg = 'Acesso autorizado somente com acompanhante.';
    } else {
        msg = 'Acesso negado.';
    }
    //altura > 1.4 && altura < 2 || altura > 1.2 && acompanhada ? msg = 'Acesso autorizado.' : msg = 'Acesso negado.'
    return msg;
}


console.log(podeSubir(1.15,true));
console.log(podeSubir(1.8,false));
console.log(podeSubir(2.1,false));
console.log(podeSubir(1.3,false));
console.log(podeSubir(1.30,true));
console.log(podeSubir(1.7,false));