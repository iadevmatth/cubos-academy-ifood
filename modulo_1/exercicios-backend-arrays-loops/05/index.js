const original = [1, 4, 12, 21, 53, 88, 112];

const arrayPar = [];

for (let par of original) {
  if (par % 2 === 0) {
    arrayPar.push(par)
  }
}

console.log(arrayPar)