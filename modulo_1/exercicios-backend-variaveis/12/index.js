let initialCapital = 60000;
let amount = 90000;
let numberMonths = 24;

const interestRate = ((amount / initialCapital) ** (1 / numberMonths)) - 1;
const interestPercent = interestRate * 100


console.log(`Your financing of R$${initialCapital} had an interest rate of ${interestPercent}% becouse after ${numberMonths} months you had to pay R$${amount}.`)