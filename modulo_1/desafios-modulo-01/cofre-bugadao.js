function processData(input) {

  const linhas = input.split("\n");
  const senhaCorreta = String(linhas[0]);
  let senhaDigitada = String(linhas[1]);

  let letraCorreta = 0;

  for (let letra = 0; letra < senhaDigitada.length; letra++) {
    if (senhaDigitada[letra] === senhaCorreta[letraCorreta]) {
      letraCorreta++;
    };
  };

  if (letraCorreta === senhaCorreta.length) {
    console.log("SIM");
  } else {
    console.log("NAO");
  };
};