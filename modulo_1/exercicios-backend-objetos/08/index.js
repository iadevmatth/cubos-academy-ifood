const usuarios = [
  {
    nome: "João",
    pets: [],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];
// Percorrer o objeto
// Verificar nome do usuario
// Verificar se possui pet
// percorrer para contar qts pet
// Se possuir pet
//   imprimir nome e qtd de pet
// se não possuir pet
//   imprimir nome e nao possui pet

for (let usuario of usuarios) {
  if (usuario.pets.length === 0) {
    console.log(`Olá, sou ${usuario.nome} e tenho ${usuario.pets.length} pets.`)
  } else (
    console.log(`Olá, sou ${usuario.nome} e tenho ${usuario.pets.length}`)
  )
}