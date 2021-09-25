const dados = require('./dados')

//const totalItens = () => dados.length;
const totalItens = () => {
    return dados.length;
}
console.log(totalItens());

const totalHomens = () => {
    const total = dados.filter((filtro) => filtro.sexo === 'masculino');
    return total.length;
}

console.log('Total de homens: ',totalHomens());

const totalMulheres = () => {
    const total = dados.filter((filtro) => filtro.sexo === 'feminino');
    return total.length;
}

console.log('Total de homens: ',totalMulheres());

const mediaAlturaTotal = () => {
    const totalPessoas = totalItens();
    const totalAlturas = dados.reduce((grupo, item) => {
        return grupo + item.altura;
    },0);
    return totalAlturas/totalPessoas;
}

console.log(mediaAlturaTotal().toFixed(2));

const mediaAlturaPorSexo = (sexo) => {
    const dadosFiltrados = dados.filter((filtro) => {
        return filtro.sexo === sexo;
    });

    const totalPessoas = dadosFiltrados.length;
    const totalAlturas = dadosFiltrados.reduce((grupo,item) => {
        return grupo + item.altura;
    },0);
    return totalAlturas/totalPessoas;
} 

console.log('Média de altura homens: ',mediaAlturaPorSexo('masculino').toFixed(2));
console.log('Média de altura mulheres: ',mediaAlturaPorSexo('feminino').toFixed(2));