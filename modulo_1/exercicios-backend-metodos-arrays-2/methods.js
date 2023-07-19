// Métodos de array II.

// Anti-vírus utilizando método "some" e "indexOF".


const arquivos = ["java.js", "Google.json", "Imagem.png"];

const antiVirus = (arrayArquivos) => {
  // Metodo "some" percorre todo o array para encontrar um arquivo específico.
  const resultado = arrayArquivos.some((arquivo) => {
    // Combinado ao metodo "indexOF" ele busca por um arquivo ".bat".
    const ExisteExtensao = arquivo.indexOf('.bat');
    // O retorno padrão para ausência do arquivo é -1.
    return ExisteExtensao !== -1
  })

  if (resultado) {
    console.log('Virus encontrado!')
  } else {
    console.log('Nenhum vírus enconrado.')
  }
};

antiVirus(arquivos)