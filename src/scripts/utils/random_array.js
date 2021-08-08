const seedrandom = require("seedrandom");
const { customAlphabet } = require("nanoid");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const nanoid = customAlphabet(alphabet, 3);

function generate(n, seed) {
  let array = [];

  for(let i = 1; i <= n; i++) {
    array.push({
      id: nanoid(),
      value: i,
      status: "",
    });
  }

  let random = seedrandom(seed);

  array.sort(() =>  0.5 - random());

  return array;
}

module.exports = generate