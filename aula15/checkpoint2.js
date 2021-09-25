//Questão 1
let x = 5;
let y = x++ + ++x;
console.log("y= " + y)
x = 3;
y = x * (x + 1) * x++;
x = 5;
y = 3;
y *= x + 1;
console.log("x= " + x);
console.log("y= " + y);

//Questão 2
let frutasAmarelas = ['Melão' , 'Mamão' , 'Limão'];
let [fruta1 , fruta2 , fruta3] = frutasAmarelas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(frutasAmarelas);

//Questão 3
/*
Concatenar string => +
Comparar conteúdo e tipo de uma variável => ===
Negação => !
Operador lógico AND => &&
*/

//Questão 4
let x = 50;
let resto = 50 % 2;
let resposta = resto == 0;
if (resposta) {
    return 'Par';
} else {
    return 'Impar';
}

//Questão 5
/*Explique os principais métodos para o trabalho de LEITURA E ESCRITA DE ARQUIVOS. 
readFileSync() -> recupera dados de um arquivo para serem utilizados no código;
writeFileSync() -> escreve os dados informados no arquivo mencionado como parâmetro. Se o arquivo for inexistente, ele cria, se existente, ele substitui o conteudo anterior pelo novo;
appendFileSync() -> acrescenta os dados informados no fim (sem apagar o conteudo anterior) de um arquivo mencionado como parâmetro. Se o arquivo for inexistente, cria um arquivo novo;
parse() -> para poder manipular os dados, eles precisam estar como objeto literal. se for json, convertemos usando o parse()*/ 


//Questão 6
/*
1celular -> não é valido
@email -> não é valido
nomePessoa -> é valido
#end_comerciaç -> não é valido
end residencial -> não é valido
*/

//Questão 7
for (var i = 0; i < 50; i += 10) {
    console.log(i)
}
console.log(i)

//Questão 8
let valor = 5;
let fatorial = 1;
for (let i = valor; i > 1; i--) {
    fatorial *= i;
}
console.log("Fatorial = " + fatorial);

//Questão 8
/*NPM = Node Package Managar*/

//Questão 9
/*
São funções dentro de outras funções -> verdadeiro
São funções que ficam aninhadas -> verdadeiro
São funções que se alojam em conteiners -> plausivel
São funções onde temos a relação de pai e filho -> verdadeiro
São funçoes representadas por arrow function -> plausivel
*/

//Questão 10
let numeros = [10,8,7,99,0,1,6];
console.log(numeros.sort(function(a,b){return b-a}));

//Questão 11
/*
Ele entende que se a condição é falsa não há nada a fazer, e continua a rodar o codigo que vem depois do if normalmente.
Dá erro? -> Falso
Não acontece nada? -> Falso
O corpo do if é executado -> Falso
A instrução abaixo do fechamento do if é executada. -> Verdadeiro
Dá uma resposta false -> Falso
*/

//Questão 12
let frutasAmarelas = ['Melão','Mamão','Limão Siciliano']; //cria uma nova array chamada frutasAmarelas, atribuindo os valores informados;
let frutasVermelhas = ['Morango','Cereja','Maçã Red']; //cria uma nova array chamada frutasVermelhas, atribuindo os valores informados;
let frutasVerdes = ['Limão','Kiwi','Maçã Verde']; //cria uma nova array chamada frutasVerdes, atribuindo os valores informados;

frutasVermelhas1 = frutasVermelhas.map(fruta => fruta.toUpperCase()); //cria uma nova array chamada frutasVermelhas1 que recebe como valores os mesmos do array frutasVermelhas utilizando o método map para passar a função mencionada por todos os itens. A função transforma os itens em letras maiusculas utilizando o metodo toUpperCase;
let todasFrutas = [...frutasAmarelas,...frutasVermelhas1,...frutasVerdes]; //cria uma nova array chamada todasFrutas que recebe como valores os mesmos valores das arrays frutasAmarelas, frutasVermelhas e frutasVerdes, sendo que o ... traz seus valores como strings separados atribuindo somente eles e não as arrays em si.
console.log(todasFrutas); //exibe no console a array todasFrutas

//Questão 13
function soma (a=1,b=3) {
    return a + b;
}

console.log(soma());
console.log(soma(3));
console.log(soma(1,2));

//Questão 14
var z = 0;
for (var i = 20; i < 50; i += 10) {
    z += i;
}
console.log(z);

//Questão 15
/*
O Node é um compilador da linguagem Javascript que possibilita o trabalho com front-end. -> Falso
O Node é um compilador da linguagem Javascript. -> Falso
O Node é um interpretador da linguagem Javascript, de código aberto, que possibilita a execução de códigos da linguagem do lado do servidor. -> Verdadeiro
O Node é um interpretador de código privado. -> Falso
O Node permite somente o trabalho com o back-end. -> Falso
*/

//Questão 16
function soletrar (texto) {
    console.log(texto
        .replace('-','') //substitui cada hífen por ""
        .toLocaleUpperCase() //transforma o texto em letras maiusculas
        .split('') //transforma o string em array
        .join('-')); //junta o array com o separador hifen
}
console.log(soletrar('digital-house'));
console.log(soletrar('ctd'));

//Questão 17
/*instanciar um objeto -> criar um objeto do mesmo tipo da classe para que possamos trabalhar com ele.*/

//Questão 18
/*
.readFileSync() -> ler um arquivo
.appendFileSync() -> adicionar conteudo ao ja existente
.parse() -> transformar dados json em objetos literais
.writeFileSync() -> adocopmar conteudo substituindo o ja existente
 */ 

//Questão 19
/*
++ -> incrementa 1
-- -> decrementa 1
% -> calcula o resto
+ -> concatena ou soma
*/