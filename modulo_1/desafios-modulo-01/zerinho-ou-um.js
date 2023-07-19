function solucao(jogadores) {
  // O metodo "filter" define como padrão jogadas 0 ou 1
  const colocou1 = jogadores.filter(jogador => jogador.jogada === 1);
  const colocou0 = jogadores.filter(jogador => jogador.jogada === 0);

  if (colocou1.length === 1) {
    console.log(colocou1[0].nome);
  } else if (colocou0.length === 1) {
    console.log(colocou0[0].nome);
  } else {
    console.log("NINGUEM");
  };
};