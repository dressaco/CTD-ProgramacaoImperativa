function teste1(x,y) {
    return y - x;
}

teste1(10,40)
//retorna 30 (y - x = 40 - 10)

function teste2(x,y) {
    return x * 2;
    console.log(x);
    return x / 2;    
}

teste2(10)
//retorna 20, que é o resultado da linha 9. As linhas 10 e 11 não são executadas pois o return encerra o bloco.
