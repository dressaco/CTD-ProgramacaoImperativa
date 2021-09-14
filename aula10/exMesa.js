////////////////////////////////////////////// Atividade 01 //////////////////////////////////////////////
/// O que esses códigos retornam?

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])
// retorna undefined porque o numbers.length irá dar um numero fora do array. (lenght é 6 e o ultimo indice é 5)

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
"Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
//retorna "Spiderman" que é o 1º item (indice 0) da 2ª lista (indice 1)

let str = "una string qualquer"
let grupoDeAmigos = [   [45, 89, 0],                                    //0
                        ["Digital", "House", true],                     //1
                        ["string","123","false", 54, true, str]         //2
                    ]


console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
//retorna "una string qualquer" pois é o 6º item (indice 5) da 3ª lista (indice 2)

let a = grupoDeAmigos[2]                //["string","123","false", 54, true, str]
let b = a.length - 1                    //5
let c = a[b]                            //a[5]


////////////////////////////////////////////// Atividade 02 //////////////////////////////////////////////
///Array Invertido

// Solução 01 Jai
function imprimirInverso (number){
    number.reverse();
    console.log(number);
}

imprimirInverso([10, 20, 30, 40]);

// Solução 02 Jai
function inverter (){
    let letras = ['a', 'b', 'c', 'd'];
    let novasLetras = [];

    novasLetras.push(letras.reverse());
    console.log(novasLetras)
}

inverter();

// Solução 01 Andressa
function imprimirInverso(array) {
    for (let i = array.length-1; i >= 0; i--) {
        console.log(array[i])
    }
}
imprimirInverso([1,2,3,4])

// Solução 02 Andressa
let novaArray = []
function inverter(array) {
    for (let i = array.length-1; i >= 0; i--){
        novaArray.push(array[i])
    }
    return novaArray
}

console.log(inverter([1,2,3,4]));


// Solução 01 Professor
// Opção 01
function imprimirInverso(array) {
    const arrayInvertido = inverter(array);

    if (typeof arrayInvertido !== 'string') {
        arrayInvertido.forEach(item => {
            console.log(item);
        });
    } else {
        console.log(arrayInvertido);
    }
}


let array = [1, 2, 3, 4, 5];
imprimirInverso(array);

//Opção 02
function imprimirInverso(array) {
    const arrayInvertido = inverter(array);

    arrayInvertido.forEach(item => {
        console.log(item);
    });
}


let array = [1, 2, 3, 4, 5];
imprimirInverso(array);

// Solução 02 Professor
// Opção 01
function inverter(array = []) {
    if (array.length > 0) {
        return array.reverse();
    }

    return 'Envie um array válido com ao menos um item';
}

// Opção 02
function inverter(array = []) {
    return array.reverse();
}

////////////////////////////////////////////// Atividade 03 //////////////////////////////////////////////
///somarArray()


//Opcao 1
function somarArray (array = []) {
    let sum = 0;
    for (i = 0;i<array.length;i++) {
        sum += array[i];
    }
    return sum;
}

//Opcao 2
function somarArray (array) {
    function sum (total,i) {
        return total += i
    }
    return array.reduce(sum)
}

console.log(somarArray([1,2,3]));
console.log(somarArray([10,3,10,4]));
console.log(somarArray([-5,100]));

////////////////////////////////////////////// Atividade 04 //////////////////////////////////////////////
///Simulação Array.join()

let msg = ['o','l','á'];

function join (array) {
    function concatenar(str,i) {
        return str.concat(i)
    }
    return array.reduce(concatenar)
}

console.log(join(msg))

////////////////////////////////////////////// Atividade 05 //////////////////////////////////////////////
///Coleções de Filmes (e mais…)
//Ex1
let movies_series = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

//Ex2
function upperCase (array) {
    for (i = 0;i < array.length;i++) {
        array[i]=array[i].toUpperCase();
    }
    return array;
}

console.log(upperCase(movies_series));

//Ex3
let animacoes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function mesclarArrays (a1,a2) {
    upperCase(a1)
    upperCase(a2)
    return a1.concat(a2);
}

//Ex4
let notMovie = animacoes.pop();
console.log(notMovie);

console.log(mesclarArrays(movies_series,animacoes));

//Ex5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparaNotas (a1,a2) {
    for (let i = 0 ; i < a1.length ; i ++) {
        console.log (a1[i] === a2[i] ? 'Nota igual' : 'Nota diferente');
    }
    return ''
}

console.log(comparaNotas(asiaScores,euroScores));



///TheEnd 