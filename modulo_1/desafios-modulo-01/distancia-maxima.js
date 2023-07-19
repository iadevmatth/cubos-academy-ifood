function processData(input) {
  // Separa o input em linhas
  const linhas = input.split("\n");
  const numFuncionarios = parseInt(linhas[0]);
  let maiorDistancia = 0;

  // Percorre as linhas com as coordenadas dos funcionários
  for (let i = 1; i <= numFuncionarios; i++) {

    // Obtém as coordenadas X e Y do funcionário atual
    const [x1, y1] = linhas[i].split(" ").map(Number);

    // Compara a distância do funcionário atual com todos os outros funcionários
    for (let j = i + 1; j <= numFuncionarios; j++) {
      // Obtém as coordenadas X e Y do outro funcionário
      const [x2, y2] = linhas[j].split(" ").map(Number);

      // Calcula a distância entre os dois pontos
      const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

      // Atualiza a maior distância, se necessário
      if (distancia > maiorDistancia) {
        maiorDistancia = distancia;
      }
    }
  }

  console.log(maiorDistancia);
};