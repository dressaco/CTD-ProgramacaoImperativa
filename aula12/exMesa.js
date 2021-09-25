//Problema Principal
const alice = [23,82,46];
const bob = [45,8,32];

function encontrarGanhador(a,b) {
    let pontosA = 0;
    let pontosB = 0;
    let vencedor
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            pontosA += 1;
        } else if (b[i] > a[i]) {
            pontosB += 1;
        }
    }
    if (pontosA > pontosB) {
        vencedor = 'Alice';
    } else if (pontosB > pontosA) {
        vencedor = 'Bob';
    } else {vencedor = 'empate';}
    return vencedor;
}

console.log (`O ganhador é ${encontrarGanhador(alice,bob)}.`);

//Problemas Bonus

function digitalHouse(n1,n2) {
    for (let i = 1; i <= 100; i++) {
        if (i % n1 === 0 && i % n2 === 0) {
            console.log ('Digital House');
        }
        else if (i % n1 === 0) {
            console.log('Digital');
        }
        else if (i % n2 === 0) {
            console.log('House');
        }
        else {
            console.log(i);
        }
    }
}

digitalHouse(3,5);