const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => animal === specie.name).residents
    .every((specie) => specie.age >= age);
}

console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
