const numeros = [54, 22, 87, 284];

let encontrei = false

for (num of numeros) {
  if (num === 10) {
    console.log(numeros.indexOf(num))
    encontrei = true
    break
  }
}

if (!encontrei) {
  console.log(-1)
}