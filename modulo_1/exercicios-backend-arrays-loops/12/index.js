const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while (filaDeDentro.length < 5) {
  const firstPeople = filaDeFora.shift(); // Variavel criada para receber o primeiro valor da array.
  filaDeDentro.push(firstPeople)
}

console.log(filaDeDentro)
console.log(filaDeFora)