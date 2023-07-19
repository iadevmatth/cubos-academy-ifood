function solucao(lista) {
  const podeParticipar = [];

  for (let candidato of lista) {
    if (candidato >= 18) {
      podeParticipar.push(candidato);
    };
  };

  if (podeParticipar.length === 0) {
    console.log("CRESCA E APARECA");
  } else {
    const maisNovo = Math.min(...podeParticipar);
    console.log(maisNovo);
  };
};