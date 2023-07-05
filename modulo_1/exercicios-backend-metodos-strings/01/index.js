const comentario = "Esse COVID é muito perigoso!";

function blockedComment(comentario) {
  // transforma toda a frase em maiúsculo para facilitar a verificação.
  const commentModified = comentario.toUpperCase();
  const ifBlocked = "Comentário bloqueado por conter palavras proibidas"
  // Caso a verificação encontre as palavras, transforma o comentário no retorno padrão.
  if (commentModified.includes("COVID") || commentModified.includes("PANDEMIA")) {
    comentario = ifBlocked
    console.log(comentario)
  } else {
    // Caso não encontre, mostra o comentário originalmente escrito.
    console.log("Comentário autorizado.");
    console.log(comentario)
  }
};

blockedComment(comentario);