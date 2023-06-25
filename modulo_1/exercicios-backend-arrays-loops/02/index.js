const letras = ["A", "a", "B", "C"];

let letrasEncontradas = [];

for (let letra of letras) {
  if (letra === "E" || letra === "e") {
    letrasEncontradas.push(letra)
  }
}

const nenhumaEncontrada = (letrasEncontradas.length === 0) ? "Nenhuma letra 'E' ou 'e' foram encontradas" :
  `foram encontradas ${letrasEncontradas.length} letras "E" ou "e"`

console.log(nenhumaEncontrada)