let capital = 1000;
let interestRate = 0.125;
let time = 5;

let amount = (1 + interestRate) ** time
amount = capital * amount

console.log(`You would earn ${amount} U$ in ${time} months`)