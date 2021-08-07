const seedrandom = require("seedrandom");

function generate(n, seed) {
  let array = [];

  for(let i = 1; i <= n; i++) {
    array.push(i);
  }

  let random = seedrandom(seed);

  array.sort(() =>  0.5 - random());

  return array;
}

module.exports = generate