const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || idade > 65 || altura < 150 || possuiPatologia === true) {
  console.log("Acesso Negado")
} else if (idade <= 18 && ehEstudante === true) {
  console.log("10 reais")
} else {
  console.log("20 reais")
}
