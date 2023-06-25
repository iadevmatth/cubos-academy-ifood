const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let sumNumbers = [];

for (let sum of numeros) {
  if (sum % 2 === 0) {
    sumNumbers.push(sum)
  }
}

let sumTotal = 0;

for (n of sumNumbers) {
  sumTotal += n
}

console.log(sumTotal)