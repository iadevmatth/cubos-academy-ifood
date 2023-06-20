const jogada1 = "papel"
const jogada2 = "papel"

if (jogada1 === jogada2) {
  console.log("Pie");
} else if (jogada1 === "pedra" && jogada2 !== "papel") {
  console.log(`jogada1 ${jogada1} winner.`)
} else if (jogada1 === "papel" && jogada2 !== "tesoura") {
  console.log(`jogada1 ${jogada1} winner.`)
} else if (jogada1 === "tesoura" && jogada2 !== "pedra") {
  console.log(`jogada1 ${jogada1} winner.`)
} else {
  console.log(`jogada2 ${jogada2} winner.`)
}