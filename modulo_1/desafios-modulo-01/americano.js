function solucao(numeros) {
  let somaAmericano = 0;
  const jogadores = numeros.length;

  for (let soma = 0; soma < numeros.length; soma++) {
    somaAmericano += numeros[soma];
  };

  const goleiro = somaAmericano % jogadores;

  if (goleiro === 0) {
    console.log(jogadores);
  } else {
    console.log(goleiro);
  };
};