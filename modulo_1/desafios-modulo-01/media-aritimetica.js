function solucao(lista) {
  let contador = 0;
  let mediaAritmetica = 0;
  for (let numero of lista) {
    contador += numero;
    mediaAritmetica = contador / lista.length;
  }
  console.log(mediaAritmetica);
};