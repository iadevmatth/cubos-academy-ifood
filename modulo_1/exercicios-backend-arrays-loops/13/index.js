const disjuntores = [false, false, true, false, false, true, false, false];

let ligados = 0;

for (let disjuntor of disjuntores) {
  if (disjuntor) {
    console.log(ligados)
  }
  ligados++
}