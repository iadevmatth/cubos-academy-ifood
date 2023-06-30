const participantes = [
  { nome: "João" },
  { nome: "Ana" },
  { nome: "Beatriz" },
  { nome: "Maria" },
  { nome: "Ana Clara" },
  { nome: "Joana" },
  { nome: "Augusto" },
  { nome: "Renan" },
  { nome: "Patricia" },
  { nome: "Carlos" },
  { nome: "Renato" },
  { nome: "José" },
  { nome: "Roberto" },
  { nome: "Sara" },
  { nome: "Junior" },
  { nome: "Pedro" },
  { nome: "Vitor" },
  { nome: "Antonio" },
];

// percorrer o array
// identificar o Carlos
// Se achar
//   identificar a posição dele
// Se não achar
//   Dizer que ele não está na fila

let qtdParticipantes = 0;

for (let pessoa of participantes) {
  qtdParticipantes++
  if (pessoa.nome === "Carlos") {
    console.log(`Galera... O ${pessoa.nome} está na posição ${qtdParticipantes}, corre la! `)
  }
}
