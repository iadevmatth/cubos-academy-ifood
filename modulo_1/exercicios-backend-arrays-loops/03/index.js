const numeros = [54, 22, 14, 87, 284];

for (num of numeros) {
  if (num === 10) {
    console.log(numeros.indexOf(num))
  } else {
    console.log("-1")
    break
  }
}