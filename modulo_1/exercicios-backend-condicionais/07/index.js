const aposentada = true;
const portadoraDeDoenca = true;
const totalDeRendimentos = 3000000; //emCentavos

if (aposentada === true) {
  console.log("ISENTA: Aposentada");
  if (portadoraDeDoenca === true) {
    console.log("ISENTA: PCD");
  } else {
    console.log("PCD: Negativo (PEGA LEAO)");
  }
} else {
  console.log("Aposentada: Negativo (PEGA LEAO)");
} if (totalDeRendimentos > 2855970) {
  console.log("RICO! PEGA LEAO!");
} else {
  console.log("VAZA LEAO! JÁ TA DIFÍCIL SEM VOCÊ!");
}