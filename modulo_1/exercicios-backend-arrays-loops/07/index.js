const nomes = ["Joana", "Carlos", "Amanda", "ana", "Alice"];

let namesWithA = [];

for (let name of nomes) {
  if (name[0] === "a" || name[0] === "A") {
    namesWithA.push(name)
  }
}

console.log(namesWithA)