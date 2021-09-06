/*1. Programa em Javascript que mostra os números ímpares
Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.*/
function exibeImpares () {
    let i = 1;
    while (i <= 100) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }
}
exibeImpares();

/*2. Programa em Javascript que mostra os números pares
Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.*/
function exibePares () {
    let i = 1;
    while (i <= 100) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}
exibePares();

/*3. Programa em Javascript que mostra os números pares e ímpares 
Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.*/
function exibeInteiros (n) {
    let i = 1;
    while (i <= n) {
        console.log(i);
        i++;
    }    
}
exibeInteiros (10);

/*4. Programa em Javascript que calcula a média das notas de uma turma
Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.
Por fim, o programa mostra a média aritmética da turma.*/
function mediaNotas () {
    let i = 1;
    let sum = 0;
    let nota;
    let qtdAlunos = parseInt(prompt('Informe quantos alunos na sala.'));
    while (i <= qtdAlunos) {
        nota = parseInt(prompt('Informe uma nota.'));
        sum += nota;
        i ++;
    }
    console.log(sum);
    console.log(i);
    return sum / (i-1);
}
mediaNotas()