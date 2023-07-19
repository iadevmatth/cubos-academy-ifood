function solucao(precos) {
  const menorValor = [];
  let somaPrecos = 0;

  for (let preco = 0; preco < precos.length; preco++) {
    somaPrecos += precos[preco];
  };

  if (precos.length > 2) {
    menorValor.push(Math.min(...precos));
    const desconto = menorValor[0] * 0.5;
    const valorFinal = somaPrecos - desconto;
    console.log(valorFinal);
  } else {
    console.log(somaPrecos);
  };
};