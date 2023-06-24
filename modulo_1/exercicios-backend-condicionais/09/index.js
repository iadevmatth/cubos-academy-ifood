let nota = 8.5;

const novaNota = (nota >= 9 && nota <= 10) ? "A" :
  (nota >= 8 && nota < 9) ? "B" :
    (nota >= 6 && nota < 8) ? "C" :
      (nota >= 4 && nota < 6) ? "D" :
        (nota < 4) ? "E" : "You weren't supposed to see that."

console.log(`Sua nota foi: ${novaNota}`)