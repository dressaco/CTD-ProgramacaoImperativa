let idade = 17;
let acompanhado = false;

//If Básico
if (idade >= 18) {
    console.log('Acesso autorizado 1');
} else if (acompanhado) {
    console.log('Acesso autorizado 2');
} else {
    console.log('Acesso não autorizado');
}

//If Ternário
idade > 18 ? console.log('Autorizado') : acompanhado ? console.log('Autorizado com acompanhante') : console.log('Não autorizado'); //--> não indicado fazer varias condições quando utilizando o if ternário
idade > 18 || acompanhado ? console.log('Autorizado') : null; //--> não indicado utilizar quando não há algo a retornar se falso;
idade > 18 || acompanhado ? console.log('Autorizado') : console.log('Não autorizado');

let valor = 10;

//Switch
switch(valor) {
    case 5:
        console.log('O valor é 5');
    break;
    case 10:
        return 10; //o return já para o bloco sem necessidade do break
        //console.log('O valor é 10');
    //break;
    case valor > 2 && valor <10: //a linguagem permite, mas não é uma boa prática;
        return '';
    default:
        console.log('O valor é teste')
    break
