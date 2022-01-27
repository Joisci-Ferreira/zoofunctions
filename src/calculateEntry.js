const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const idade = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      idade.child += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      idade.adult += 1;
    }
    if (entrant.age >= 50) {
      idade.senior += 1;
    }
  });
  return idade;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const priceChild = countEntrants(entrants).child * prices.child;
  const priceAdult = countEntrants(entrants).adult * prices.adult;
  const priceSenior = countEntrants(entrants).senior * prices.senior;
  return parseFloat((priceChild + priceAdult + priceSenior).toFixed(2));
}

module.exports = { calculateEntry, countEntrants };
