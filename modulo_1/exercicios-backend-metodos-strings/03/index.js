const texto = "Aprenda programar do zero na Cubos Academy";

function urlFormatada(texto) {
  if (texto) {
    let textoFormatado = texto.toLowerCase();
    while (textoFormatado.includes(" ")) {
      textoFormatado = textoFormatado.replace(" ", "-")
    };
    console.log(textoFormatado)
  } else if (!texto) {
    console.log("Url Invalida.")
  }
};

urlFormatada(texto)