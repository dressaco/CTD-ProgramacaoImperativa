//1.	Crie uma função que converta polegadas em centímetros.
//Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function convertePolegadas(pol) {
    let cm = pol * 2.54;
    return cm;
}
//2.	Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
function converteURL(name) {
    //let url = "http://www." + name + ".com.br";
    let url = `http://www.${name}.com.br`;
    return url;
}
//3.	Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
function addExclamacao(frase) {
    return frase + "!";
}
//4.	Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function idadeCao(anos) {
    let anosCao = anos * 7;
    return anosCao;
}
//5.	Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
//PS: considere que você trabalhe 160 horas no mês.
function valorHora(salario) {
    let n = salario / 160;
    n = parseFloat(n.toFixed(2));
    return n
}

//6.	Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
function calculadoraIMC(altura,peso) {
    let imc = peso / (altura * altura);
    return Math.round(imc);
}
//7.	Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
//Investigue o que o método de .toUpperCase() faz.
function converterMaiusculas(texto) {
    let maisc = texto.toUpperCase();
    return maisc;    
}
//8.	Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
//Dica: Isso te ajudará a entender o que o operador typeof faz.
function tipoDados(x) {
    return typeof(x);
}
//9.	Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
//Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
function circunferencia(raio) {
    return 2 * Math.PI * raio;
}

//Testes
console.log(`1 - ${convertePolegadas(1)}`);
console.log(`2 - ${converteURL('olamundo')}`);
console.log(`3 - ${addExclamacao('Olá, mundo')}`);
console.log(`4 - ${idadeCao(10)}`);
console.log(`5 - ${valorHora(1098)}`);
console.log(`6 - ${calculadoraIMC(1.70,70)}`);
console.log(`7 - ${converterMaiusculas('olá mundo')}`);
console.log(`8 - ${tipoDados(true)}`);
console.log(`9 - ${circunferencia(2)}`);