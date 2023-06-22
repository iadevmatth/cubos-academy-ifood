const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;


// NÃO SÃO PERMITIDAS:

// Menores de 12 anos
// Maiores de 65 anos
// Que possuam qualquer patologia cardíaca
// Menores de 150cm de altura

// PERMITIDAS
// 10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
// 20 reias, caso contrário

//IMPRIMIR
// ACESSO NEGADO caso a pessoa não possa brincar
// 10 reais caso esse seja o valor que a pessoa deve pagar para brincar
// 20 reais caso esse seja o valor que a pessoa deve pagar para brincar

if (idade < 12) {
  console.log("")
  if (idade > 65) {
    console.log("ACESSO NEGADO: idade superior a permitida.")
  } else if ("") {
    console.log("R$20,00")
  }
}