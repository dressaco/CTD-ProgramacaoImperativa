// Atividade de Mesa da Aula 10 já foi feita utilizando Ciclos de Repetição

//Bônus Extra
notas = {
    A: [5, 8, 4, 9, 5],
    B: [8, 7, 8, 6, 8],
    C: [7, 5, 10, 8, 3]
}

function pontuacaoMedia (participante) {
    function sum (sum,i) {
        return sum += i;
    }
    return participante.reduce(sum) / participante.length;
}

console.log(pontuacaoMedia(notas.A));
console.log(pontuacaoMedia(notas.B));
console.log(pontuacaoMedia(notas.C));

function pontuacaoMaior (participante) {
    //return Math.max.apply(null,participante)
    return Math.max(...participante);
}

console.log(pontuacaoMaior(notas.A));
console.log(pontuacaoMaior(notas.B));
console.log(pontuacaoMaior(notas.C));

/*function competicao (p1,p2,p3) {
    const mediaP1 = pontuacaoMedia(notas.p1)
    console.log(`Participante vencedor na modalidade Média: ${participante} com ${media}`)
    console.log(`Participante vencedor na modalidade Maior nota: ${participante} com ${media}`)
}*/