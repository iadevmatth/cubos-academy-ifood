function solucao(carta) {
  const ordemCartas = ['Q', 'J', 'K', 'A', '2', '3'];

  for (let manilha = 0; manilha < ordemCartas.length; manilha++) {
    if (carta === ordemCartas[manilha]) {
      if (carta === ordemCartas[5]) {
        const jogadaUnica = ordemCartas[0];
        console.log(jogadaUnica);
        break;
      };
      const cartaSuperior = ordemCartas[manilha + 1];
      console.log(cartaSuperior);
    };
  };
};