const original = [5, 7, 13, 17, 26, 34, 118, 245];

let fake = [];

for (let number of original) {
  if ((number > 100) || (number > 10 && number < 20)) {
    fake.push(number)
  }
}
console.log(fake)