function solucao(min, km) {
  // Calculo da viagem com base no tempo
  const valorPadraoMinuto = 0.50;


  let valorMinuto = 0;

  if (min > 20) {
    const minutoComDesconto = min - 20;
    valorMinuto = (20 * valorPadraoMinuto) + (minutoComDesconto * 0.30);
  } else {
    valorMinuto = min * valorPadraoMinuto;
  };

  // Calculo da Viagem com base no quilometro
  const valorPadraoKm = 0.70;

  let valorKm = 0;

  if (km > 10) {
    const kmComDesconto = km - 10;
    valorKm = (10 * valorPadraoKm) + (kmComDesconto * 0.50);
  } else {
    valorKm = km * valorPadraoKm;
  };

  const valorTotalViagem = Math.floor((valorMinuto + valorKm) * 100);
  console.log(valorTotalViagem);
};