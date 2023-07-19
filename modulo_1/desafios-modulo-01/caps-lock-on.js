function processData(input) {

  if (input === input.toUpperCase()) {
    const palavraFormatada = input.toLowerCase();
    console.log(palavraFormatada);
  } else if (
    input[0] === input[0].toLowerCase() &&
    input.slice(1) === input.slice(1).toUpperCase()
  ) {
    const palavraFormatada = input[0].toUpperCase() + input.slice(1).toLowerCase();
    console.log(palavraFormatada);
  } else {
    console.log(input);
  };
};