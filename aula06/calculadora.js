function adicionar (a,b) {
    return a + b;
  }
  resultado = adicionar(2,3);
  console.log(resultado)
  
  function subtracao (a,b) {
    return a - b;
  }
  
  function multiplicacao (a,b) {
    return a * b;
  }
  
  function divisao (a,b) {
    return a / b;
  }
  
  console.log (`-------------- Teste de Operações / Calculadora --------------`);
  console.log (adicionar(1,4));
  console.log (subtracao(3,1));
  console.log (multiplicacao(2,3));
  console.log (divisao (6,2));
  console.log (divisao (0,5));
  console.log (divisao (5,0));
  
  function quadradoDoNumero (a) {
      return multiplicacao (a,a);
  }
  
  function mediaDeTresNumeros(a,b,c) {
      let s = adicionar(a,b);
      s = adicionar(s,c)
      let media = divisao(s,3);
      return media;
  }
  
  function calculaPorcentagem (a,b) {
      let p = divisao(b,100)
      let valor = multiplicacao (p,a)
      return valor
  }
  
  
  console.log (`-------------- Teste de Operações / Calculadora --------------`);
  console.log (quadradoDoNumero(2));
  console.log (mediaDeTresNumeros(1,2,3));
  console.log (calculaPorcentagem(300,15));