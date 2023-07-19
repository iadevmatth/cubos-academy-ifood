function solucao(texto) {
  /* Utiliza o metodo "trim" para elimitar espaços e dentro do metodo split
  e dentro do metodo "split" é passado uma expressão regular que elimina qualquer
  espaço em branco dentro da frase.
  */
  const textoFormatado = texto.trim().split(/\s+/);

  let contador = 0;
  for (let palavra of textoFormatado) {
    /* O metodo "match" recebe como parametro a expressão regular abaixo para varrer a frase
    e considerar apenas letras de 'a á z' menúsculas e maiúsculas e números de '0 a 9'.
    */
    if (palavra.match(/[a-zA-Z0-9]+/)) {
      contador++;
    }
  }
  console.log(contador);
};