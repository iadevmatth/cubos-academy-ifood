function solucao(min, max, valores) {
  let valorPermitido = [];
  for (let valor of valores) {
    if (valor >= min && valor <= max) {
      valorPermitido.push(valor);
    }
  }
  console.log(valorPermitido);
};